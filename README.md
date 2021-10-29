# Clone

git clone https://github.com/mehrajankur001/Triox-Assignment-Backend.git

# Install Dependencies

cd Triox-Assignment-Backend

npm install

# Env Variables

Create a .env file in then root and add the following

PORT = 5000

MONGO_URI = your mongodb uri

# Seed Database

You can use the following commands to seed the database with some sample products as well as destroy all data

## Import data

npm run data:import

## Destroy data

npm run data:destroy

# Run backend

 ## node server.js   

or

## npm run server

or

## npm start
