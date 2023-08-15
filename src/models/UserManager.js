const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  addUser(users) {
    return this.database.query(
      `insert into ${this.table} ( pseudo, email, password, is_admin ) values (?, ?, ?, ?)`,
      [users.pseudo, users.email, users.hashedPassword, users.is_admin]
    );
  }
}

module.exports = UserManager;
