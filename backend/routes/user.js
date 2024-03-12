const express = require("express");
const { UserModel, accountModel } = require("../db");
const { userZod, updateBodyZod } = require("../types");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config");
const { authMiddleware } = require("../middleware");
const { request } = require("express");
const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  const body = req.body;

  const { success } = userZod.safeParse(body);

  if (!success) {
    res.status(404).send({ message: "Invalid username or password" });
  }

  const uniqueUser = await UserModel.findOne({ username: req.body.username });

  console.log(uniqueUser);

  if (uniqueUser) {
    res.status(400).send({ message: "User already exists" });
  } else {
    try {
      const user = new UserModel(body);
      await user.save();
      const userId = user._id;
      // console.log(id);
      const account = new accountModel({
        userId,
        balance: 1 + Math.floor(Math.random() * 1000),
      });

      console.log(account);

      await account.save();
      res.status(200).send(user);
    } catch (e) {
      res.status(500).send(e);
    }
  }
});

userRouter.post("/signin", async (req, res) => {
  const body = req.body;
  const { success } = userZod.safeParse(body);

  if (!success) {
    res.status(404).send({ message: "Invalid username and password" });
  }

  try {
    const findUser = await UserModel.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    console.log(findUser);

    if (findUser) {
      const userId = findUser._id;
      console.log(userId, JWT_SECRET_KEY);
      const token = jwt.sign(
        {
          userId,
        },
        JWT_SECRET_KEY
      );
      res.status(200).send({ token: token });
    } else {
      res.status(404).send({ message: "Not Found" });
    }
  } catch (e) {
    res.status(411).send({ message: "Error while logging in" });
  }
});

userRouter.put("/user", authMiddleware, async (req, res) => {
  const { success } = updateBodyZod.safeParse(req.body);
  if (!success) {
    res.status(401).send({ message: "Provider proper validation failed" });
  }

  try {
    const uniqueUserId = await UserModel.findByIdAndUpdate(userId, req.body);

    if (uniqueUserId) {
      res.status(200).send(uniqueUserId, { message: "Updated successfully " });
    }
  } catch (e) {
    res.status(411).send({ message: "Error while updating information" });
  }
});

userRouter.get("/bulk", authMiddleware, async (req, res) => {
  const filter = req.query.filter || "";

  try {
    const user = await UserModel.find({
      $or: [
        { firstName: { $regex: `${filter}`, $options: "i" } },
        { lastName: { $regex: `${filter}`, $options: "i" } },
      ],
    });
    res.status(200).send({
      user: user.map((user) => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id,
      })),
    });
  } catch (e) {
    res.status(404).send({ message: "not found" });
  }
});

module.exports = userRouter;
