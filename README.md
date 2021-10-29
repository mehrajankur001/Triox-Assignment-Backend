### Env Variables

Create a .env file in then root and add the following

PORT = 5000

MONGO_URI = your mongodb uri

### Install Dependencies (frontend & backend)

npm install
cd frontend
npm install

### Seed Database

You can use the following commands to seed the database with some sample products as well as destroy all data

# Import data

npm run data:import

# Destroy data

npm run data:destroy

### Run backend

node server.js or npm run server or npm start
