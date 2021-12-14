const userRouter = require("express").Router();

const jwtAuth = require('../controllers/middleware/jwtAuth');
const userController = require("../controllers/userController");

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.get("/verify", [jwtAuth.verifyToken], userController.verify);

module.exports = userRouter;