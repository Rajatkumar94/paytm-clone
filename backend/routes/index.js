const express = require("express");
const accountRounter = require("./account");
const userRouter = require("./user");

const mainRouter = express.Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/account", accountRounter);

module.exports = mainRouter;
