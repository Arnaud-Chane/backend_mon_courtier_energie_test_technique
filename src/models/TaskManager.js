const AbstractManager = require("./AbstractManager");

class TaskManager extends AbstractManager {
  constructor() {
    super({ table: "task" });
  }

  addTask(tasks) {
    return this.database.query(
      `insert into ${this.table} ( user_id, title, detail, task_done, task_archived, task_priority ) values (?, ?, ?, ?, ?, ?)`,
      [
        tasks.user_id,
        tasks.title,
        tasks.detail,
        tasks.task_done,
        tasks.task_archived,
        tasks.task_priority,
      ]
    );
  }

  findTaskByUserId(userId) {
    return this.database.query(
      `select * from  ${this.table} where user_id = ?`,
      [userId]
    );
  }

  updateTaskTitle(tasks) {
    return this.database.query(
      `UPDATE ${this.table} SET title = ? WHERE task_id = ?`,
      [tasks.title, tasks.task_id]
    );
  }

  updateTaskDetail(tasks) {
    return this.database.query(
      `UPDATE ${this.table} SET detail = ? WHERE task_id = ?`,
      [tasks.detail, tasks.task_id]
    );
  }

  updateTaskIfDone(tasks) {
    return this.database.query(
      `UPDATE ${this.table} SET task_done = ? WHERE task_id = ?`,
      [tasks.task_done, tasks.task_id]
    );
  }

  updateTaskIfArchived(tasks) {
    return this.database.query(
      `UPDATE ${this.table} SET task_archived = ? WHERE task_id = ?`,
      [tasks.task_archived, tasks.task_id]
    );
  }

  updateTaskPriority(tasks) {
    return this.database.query(
      `UPDATE ${this.table} SET task_priority = ? WHERE task_id = ?`,
      [tasks.task_priority, tasks.task_id]
    );
  }
}

module.exports = TaskManager;
