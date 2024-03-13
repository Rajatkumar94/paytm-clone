const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("./config");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(403).send({});
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(403).send({ error });
  }
};

module.exports = { authMiddleware };
