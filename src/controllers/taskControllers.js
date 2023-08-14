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

const createTask = (req, res) => {
  const task = req.body;
  models.task
    .addTask(task)
    .then(([result]) => {
      res.location(`/tasks/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateTaskTitle = (req, res) => {
  const task = req.body;
  task.task_id = parseInt(req.params.id, 10);
  models.task
    .updateTaskTitle(task)
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

module.exports = {
  getAllTasks,
  getTaskById,
  getTaskByUserId,
  createTask,
  updateTaskTitle,
};
