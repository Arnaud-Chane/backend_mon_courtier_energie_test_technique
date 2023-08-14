/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
const models = require("../models");

const getAllTasks = (req, res) => {
  models.task
    .findAll()
    .then(([task]) => {
      res.status(200).send(task);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getTaskById = (req, res) => {
  models.task
    .find(req.params.id)
    .then(([task]) => {
      if (task[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(task[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getTaskByUserId = (req, res) => {
  const userId = req.params.id;
  models.task
    .findTaskByUserId(userId)
    .then(([task]) => {
      if (task[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(task);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllTasks,
  getTaskById,
  getTaskByUserId,
};
