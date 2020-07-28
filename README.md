# Unit 11 Express Homework: Note Taker

## Description

Created an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

- The application frontend has been created.

- The following HTML routes are created:

  - GET `/notes` - Should return the `notes.html` file.

  - GET `*` - Should return the `index.html` file

- The application have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

- The following API routes are created:

  - GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  - POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  - DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

  The application is accessible under: https://apologetic-eds-61441.herokuapp.com/

## User Story

AS A user, will be able to write and save notes

## Submission on BCS

You are required to submit the following:

- The URL of the deployed application. This should be the link to the url provided by Heroku. Be sure not to submit a link to the Heroku dashboard.

- The URL of the GitHub repository

---

© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
