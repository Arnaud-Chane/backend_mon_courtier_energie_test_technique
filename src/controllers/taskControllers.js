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

module.exports = {
  getAllTasks,
};
