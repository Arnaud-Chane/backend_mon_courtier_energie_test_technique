const AbstractManager = require("./AbstractManager");

class TaskManager extends AbstractManager {
  constructor() {
    super({ table: "task" });
  }

  addTask(tasks) {
    return this.database.query(
      `insert into ${this.table} ( user_id, title, detail, task_done, task_archived ) values (?, ?, ?, ?, ?)`,
      [
        tasks.user_id,
        tasks.title,
        tasks.detail,
        tasks.task_done,
        tasks.task_archived,
      ]
    );
  }

}

module.exports = TaskManager;
