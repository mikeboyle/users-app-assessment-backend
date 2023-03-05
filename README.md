# Backend deployment and database challenge

## My deployed API URL is:
(Paste your render URL here)

## Overview
In this challenge, you will take an Express API that serves hard-coded data from a JSON file and:

1. deploy this API to render
1. create a database for the API on ElephantSQL
1. create a `users` table in your database
1. seed the table with the data from `usersData.json`
1. refactor the controllers and queries to serve data from your db
1. deploy your changes so that your API on render calls the db

See [the Detailed instructions section](#tasks) below for detailed instructions, tips, and hints.

## Getting started

1. **Fork** this repo.
1. Clone your fork to your computer.
1. Install dependencies: `npm install`
1. Start the server: `npm start`

## Submitting
- As you write code, push or merge it to the main branch of **your fork** (not the upstream repo)
- When the instructions, videos, or other resources say to make a PR, make that PR to **your fork**
- **At the end of class**, make a PR of **your main branch** to the **upstream** repo main branch (so I can review your code)

## Helpful resources
**Deploying the API to render**

- [Render deploy instructions](https://docs.google.com/document/d/1KZt0TkDx5hL7A9aNmI3uZwa1tM_0JPx9rUgBi-4iPWw/edit?usp=sharing)
- [Video: API deploy](https://us06web.zoom.us/rec/share/yXGGHRpoY_duDmjX87oVPiLNtpiH16SZJUWbS6D2qWujM1vK7Z1PBBm9H5LWk3AP.8ileRqPEQmhXca3B?startTime=1676920872000&pwd=i5e07v6GrC9npe7mEzr5yJXpy3qrO9kp)

**Creating the DB and connecting API to DB**

- [Database setup instructions](https://docs.google.com/document/d/1faTGqezDteB4HecJp3f0aZgT7mvXU52My_7-_MNJMmo/edit?usp=sharing)
- [Video: Create db and connect API to db](https://us06web.zoom.us/rec/share/gEz-eUuwZCbLv_VFOXvozcWSgytMj3KK3XxVnOQZwA1L7U_NSfWKASNk4vEKK-qu.VnCe5S2CSnd5exii?startTime=1677263406000&pwd=qHjCHrx55Lfu5wMCltAEozflkPcvAG1d)
- [Code changes from the video](https://github.com/mikeboyle/student-app-backend/pull/3/files)

**Create and seed data; serve data from DB**
- [Video: Create and seed data; serve from db](https://us06web.zoom.us/rec/share/kQNjT8bane_j_vDJx8IKoZnk7Z5WalZDfMLQvzCyR0ZF7a2OUoCChN6vQAcE0Ai8.CL2R90qQjzrXpDFo?startTime=1677609325000&pwd=KRxHYGQ0iakfZkd8TaZnCtCf1LJvwtTk)
- [Code changes from the video](https://github.com/mikeboyle/student-app-backend/pull/8/files)

**Reference code**
- [student-app-backend repo](https://github.com/mikeboyle/student-app-backend)


## Routes
After each stage of the challenge, make sure that all of these routes function as expected.

- `/`: returns a `200` response: `{ data: 'Service is running' }
- `/users`: returns a `200` response in this format: `{ data: [ {//user 1...}, { // user 2, ...}, ...]}`
- `/users/:id`: returns a `200` response in this format: `{ data: { name: ..., age: ..., }}`
- `/users/:id`: returns a `404` response if the id does not exist: `{ error: 'User with id ... not found'}`

## <a id="tasks"></a>Detailed instructions

### 1. Deploy to render
1. Deploy your API to render.
1. Make sure that all routes work.
1. **Paste your deployed URL** in the top of this README.
1. Commit and merge your changes to the main branch of **your fork**.

### 2. Create a database
1. Create a database on Elephant SQL
1. **Do not commit the connection string / URL to GitHub**

### 3. Create the `users` table
1. Create a `schema.sql` file in this repo that defines the table. The columns should match the keys and data types you see in the `usersData.json` file.
1. Run the schema file to create the table in your db.
1. Commit and merge your changes to the main branch of **your fork**.

#### Tips and hints
> The data type for `latitude` and `longitude` is **`float`**.

### 4. Seed the table with the data from `usersData.json`
1. Create a `seeds.sql` file in this repo that adds at least 3 students from `usersData.json` to the `users` table.
1. The uuids in the table do not need to match the uuids in `usersData.json` (although it is possible to insert the exact ids from the JSON).
1. Commit and merge your changes to the main branch of **your fork**.

#### Tips and hints
> Don't waste time copy-pasting every single user from the JSON file. Just do 3 to start. Do the rest if you have time at the end.

> The `about` texts have apostrophes. (For example: `'Hi there! I'm Park...'` ). These will cause problems because SQL statments require single quotes around strings.
>
>You can escape a single quote in a SQL statement by repeating it: `'Hi there! I''m Park...'`

### 5. Serve data from the db
1. Refactor the queries and controllers to fetch from the database.
1. You will need to use `pg-promise`. It is already installed.
1. Use environment variables to store the connection string (database URL).
1. Delete the `usersData.json` file.
1. Commit and merge your changes to the main branch of **your fork**.

### 6. Final deployment
1. If it works locally, update your environment variables on Render, then push, merge, and deploy your code changes.
1. By the end of this step, your deployed database should serve data from the db.
