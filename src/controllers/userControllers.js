/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
const models = require("../models");

const getAllUsers = (req, res) => {
  models.user
    .findAll()
    .then(([user]) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserById = (req, res) => {
  models.user
    .find(req.params.id)
    .then(([user]) => {
      if (user[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(user[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createUser = (req, res) => {
  const user = req.body;
  if(user.is_admin === true) {
    user.is_admin = 1;
  } else {
    user.is_admin = 0;
  }

  models.user
    .addUser(user)
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateUser = (req, res) => {
  const user = req.body;
  user.user_id = parseInt(req.params.id, 10);

  models.user
    .updateUser(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteUser = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserInformation = (req, res) => {
  const userId = req.user_id;

  models.user
    .find(userId)
    .then(([user]) => {
      if (user) {
        const userInfo = {
          userId: user[0].user_id,
          pseudo: user[0].pseudo,
          email: user[0].email,
          role: user[0].is_admin,
        };
        res.status(200).json(userInfo);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserInformation,
};
