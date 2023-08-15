const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  addUser(users) {
    return this.database.query(
      `insert into ${this.table} ( pseudo, email, password, is_admin ) values (?, ?, ?, ?)`,
      [users.pseudo, users.email, users.password, users.is_admin]
    );
  }

  findUserByEmail(users) {
    return this.database.query(`select * from ${this.table} where email = ?`, [
      users.email,
    ]);
  }

  updateUser(users) {
    return this.database.query(
      `update ${this.table} set pseudo = ?, email = ?, is_admin = ? where user_id = ?`,
      [users.pseudo, users.email, users.is_admin, users.user_id]
    );
  }
}

module.exports = UserManager;
