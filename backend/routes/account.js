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
  const { to, amount } = req.body;

  const session = await mongoose.startSession();
  session.startTransaction();

  const from = await accountModel.findById(req.userId).session(session);

  if (!from || from.balance < amount) {
    await session.abortTransaction();
    return res.status(400).send({ message: "Insufficient balance" });
  }

  try {
    const to = await accountModel.findById({ _id: to }).session(session);

    await accountModel
      .findByIdAndUpdate(req.userId, {
        balance: balance - amount,
      })
      .session(session);

    await accountModel
      .findByIdAndUpdate(to._id, {
        balance: balance + amount,
      })
      .session(session);

    res.status(200).send({ message: "Transfer successful" });
    session.commitTransaction();
  } catch (err) {
    res.status(500).send({ message: "Invalid account" });
  }
});

module.exports = accountRounter;
