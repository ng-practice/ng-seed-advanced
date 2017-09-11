import { Router, Request, Response } from 'express';
import JsonDb = require('node-json-db');

import { StoredNotes } from './stored-notes.repository';
const db = new JsonDb(`${__dirname}/notes.json`, true, true);

export class Notes {
  constructor (
    public routes = Router(),
    private notes = new StoredNotes(db)) {

    this.routes.get(   '/all',           this.all);
    this.routes.get(   '/single/:guid',  this.single);
    this.routes.get(   '/search/:title', this.search);
    this.routes.post(  '/create',        this.createOrUpdate);
    this.routes.put(   '/update',        this.createOrUpdate);
    this.routes.delete('/remove/:guid',  this.remove);
  }

  all = (req: Request, res: Response) => {
    res.status(200).send(this.notes.all());
  }

  single = ({ params }: Request, res: Response) => {
    const found = this.notes.single(params.guid);

    if (found) {
      return res.send(found);
    }

    return res.status(404).send(new Error('Uups, we found no note having ' +
                                          `an ID "${params.guid}".`));
  }

  search = ({ params }: Request, res: Response) => {
    const found = this.notes.searchByTitle(params.title);

    if (found && found.length > 0) {
      return res.send(found);
    }

    return res.status(404).send(new Error(`Sorry, no note contains the title "${params.title}".`));
  }

  createOrUpdate = (req: Request, res: Response) => {
    const guid = this.notes.create(req.body);

    if (guid) {
      return res.status(201).send({
        message: 'Congratulations, all information were transmitted successfully.',
        href: `http://localhost:4280/notes/single/${guid}`
      });
    }

    return res.status(405).send(new Error('Note could not be created'));
  }

  remove = ({ params }: Request, res: Response) => {
    this.notes.remove(params.guid);
    return res.send('The note has been removed, successfully.');
  }
}
