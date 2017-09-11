# ng-seed-advanced

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.0.

> **Make sure** that you have installed all `node_modules`

## Start Client

- Execute `npm start` for a dev server.
- Navigate to `http://localhost:4200`.

## Start Backend

- Execute `npm run api` to start the HTTP-API.
- The API is hosted on `http://localhost:4280`.

|        |Url|Description|
|--------|---------|-----------|
|`POST`  |/register|Add a new user|
|`POST`  |/login   |Logging in a existing user|
|`GET`   |/notes/all|Gets all notes|
|`GET`   |/notes/single/:guid|Gets a single note by its GUID|
|`POST`  |/notes/create/|Creates a new note|
|`PUT`   |/notes/update/|Updates a new note|
|`DELETE`|/notes/remove/:guid|Deletes the specified note|
