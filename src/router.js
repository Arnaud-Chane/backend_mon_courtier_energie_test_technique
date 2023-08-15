const express = require("express");

const router = express.Router();

const { hashPassword, verifyPassword } = require("./middlewares/auth");

const userControllers = require("./controllers/userControllers");
const taskControllers = require("./controllers/taskControllers");

router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getUserById);
router.post("/users", hashPassword, userControllers.createUser);
router.put("/users/:id", userControllers.updateUser);
router.delete("/users/:id", userControllers.deleteUser);

router.get("/users/:id/tasks", taskControllers.getTaskByUserId);
router.get("/tasks", taskControllers.getAllTasks);
router.get("/tasks/:id", taskControllers.getTaskById);
router.post("/tasks", taskControllers.createTask);
router.put("/tasks/:id", taskControllers.updateTaskTitle);
router.put("/tasks/:id/detail", taskControllers.updateTaskDetail);
router.put("/tasks/is-done/:id", taskControllers.updateTaskIfDone);
router.put("/tasks/is-archived/:id", taskControllers.updateTaskIfArchived);
router.put("/tasks/:id/priority", taskControllers.updateTaskPriority);
router.delete("/tasks/:id", taskControllers.deleteTask);

module.exports = router;
