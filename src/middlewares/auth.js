const argon2 = require("argon2");
require("dotenv").config();

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.password = hashedPassword;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyPassword = (req, res) => {
  argon2

    .verify(req.user.password, req.body.password)

    .then((isVerified) => {
      if (isVerified) {
        res.sendStatus(201);
      } else {
        res.sendStatus(401);
      }
    })

    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
module.exports = {
  hashPassword,
  verifyPassword,
};
