const express = require("express");
const { default: mongoose } = require("mongoose");
const { accountModel, UserModel } = require("../db");
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

accountRounter.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { to, amount } = req.body;

    console.log(" calling bro ", req.userId, to, amount);

    const from = await accountModel
      .findOne({ userId: req.userId })
      .session(session);

    console.log(" from ", from);

    if (!from || from.balance < amount) {
      await session.abortTransaction();
      return res.status(400).send({ message: "Insufficient balance" });
    }
    const toAccount = await accountModel
      .findOne({ userId: to })
      .session(session);

    console.log(" calling account ", to, toAccount);

    if (!toAccount) {
      await session.abortTransaction();
      return res.status(400).send({ message: "Invalid account" });
    }

    await accountModel
      .updateOne({ userId: req.userId }, { $inc: { balance: -amount } })
      .session(session);

    await accountModel
      .updateOne({ userId: to }, { $inc: { balance: amount } })
      .session(session);

    res.status(200).send({ message: "Transfer successful" });
    await session.commitTransaction();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = accountRounter;
