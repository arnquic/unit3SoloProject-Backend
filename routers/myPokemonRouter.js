const userRouter = require("express").Router();

const jwtAuth = require('../controllers/middleware/jwtAuth');
const myPokemonController = require("../controllers/myPokemonController");

userRouter.get("/", [jwtAuth.verifyToken], myPokemonController.getMyPokemon);
userRouter.post("/add", [jwtAuth.verifyToken], myPokemonController.addPokemon);
//userRouter.post("/saveBattle", [jwtAuth.verifyToken], myPokemonController.saveBattle);

module.exports = userRouter;