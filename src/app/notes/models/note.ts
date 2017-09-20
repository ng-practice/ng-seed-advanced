import { Todo } from './todo';

export class Note {
  guid: string;
  title: string;
  text: string;

  constructor() {
    this.guid = '_' + Math.random().toString(36).substr(2, 9);
  }

  todos: Todo[];
}
