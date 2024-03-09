const express = require("express");
const { accountModel } = require("../db");
const { authMiddleware } = require("../middleware");
const accountRounter = express.Router();

accountRounter.get("/balance", authMiddleware, async (req, res) => {
  console.log(req.userId);
  try {
    const account = await accountModel.findById(req.userId);

    res.status(200).send({ balance: account.balance });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

accountRounter.post("/transfer", authMiddleware,() => {

    
});

module.exports = accountRounter;
