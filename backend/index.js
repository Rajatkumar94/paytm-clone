const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes");
const app = express();
const PORT = 3000;
app.use(cors());

app.use(express.json());

app.use("/app/v1/", mainRouter);

app.listen(PORT, (req, res) => {
  console.log("listening on port " + PORT);
});
