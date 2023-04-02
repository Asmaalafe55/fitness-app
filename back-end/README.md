# Fitness-app

### Installation steps:

- `git clone git@github.com:Asmaalafe55/Fitness-app`
- `cd Fitness-app`
- `npm i`
- for .env file please refer to the .env.example file to know which variables you need
- after you get the local database url run the following command to build it `npm run build:db`
- run `npm run seed:db` to populate the database with fake data
- `npm run dev`

API's Definition : visit this link >>>
https://documenter.getpostman.com/view/25516578/2s935hQSCX#8c4b2b19-f5b9-48f0-ad17-5b1ef2aed851

## db migration

To create new migrate:

`$ npm run migrate:create [migration name]`

To up migrate run:
`npm run migrate:up`

To down migrate run:
`npm run migrate:down`

documentations: https://github.com/salsita/node-pg-migrate
