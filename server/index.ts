import express = require('express');
import jwt = require('express-jwt');
import parse = require('body-parser');
import cors = require('cors');

import { Authentication } from './authentication/controller';
import { Notes } from './notes/controller';

const server = express();
const port = 4280;
const secret = ':3K_sl;e&sd5K03)_dsl&k:sdTL;';

server.use(parse.json());
server.use(cors());
server.use(jwt({ secret }).unless({ path: ['/login', '/register'] }));

server.use('/',      new Authentication(secret).routes);
server.use('/notes', new Notes().routes);

server.listen(port, () => console.log(`API runs at http://localhost:${port}`));
