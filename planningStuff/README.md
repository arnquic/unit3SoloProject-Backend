# unit3SoloProject-Backend

## Backend Routes
- '/user/signup' - Create a new user.
- '/user/login' - Login to an existing user account.
- '/user/verify' - Verify a user that currently has an auth token stored.
- '/myPokemon' - Get all of the currently logged-in user's pokemon.
- '/myPokemon/add' - Add a pokemon to the currently logged-in user's pokemon.
- (Stretch)'/myPokemon/saveBattle' - Save the logged-in user's current pokemon's battle.

## ERD (Entity Relationship Diagram)
See ERD.jpg

## Backend MVP Checklist
1. [x] Create Backend Express App
    1. [x] npm init
    2. [x] npm installs (express, nodemon, pg, sequelize, dotenv, bcrypt, jsonwebtoken, cors, rowdy-logger)
    3. [x] sequelize init
    4. [x] .gitignore (node_modules, config, .env)
2. [x] Create DB models
    1. [x] Use singular names
3. [x] Migrate models
4. [x] Create routers and controllers for backend
5. [x] Create controller functions
6. [x] Hook-up server.js with routers and routers with controllers