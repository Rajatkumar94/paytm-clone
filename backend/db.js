const mongoose = require("mongoose");
require("dotenv").config();
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl);

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const UserModel = mongoose.model("User", UserSchema);
const accountModel = mongoose.model("Account", accountSchema);

module.exports = {
  UserModel,
  accountModel,
};
