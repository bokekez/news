Client made with React, Typescript and Vite.
Server made with Node, Express and Typescript.
Database made with Postgres and hosted on render.

To run the project locally close the project with "git clone git@github.com:bokekez/news.git"

Copy/Paste the server .env file into the correct location as seen below:

├── client/
├── server/
│   └── .env
├── package.json

After cloning and inserting the .env file run: 
- cd news
- npm i
- npm start

The app should start and you can click on the link to see the frontend http://localhost:5173/

To format the project you can run: npm run format

To run the tests you can run: npm run test

In the server folder there is a postman collection that was used in development.

The database has 2 tables "users" and "favorites".
