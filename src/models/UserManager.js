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

  findUserByEmail(users) {
    return this.database.query(`select * from ${this.table} where email = ?`, [
      users.email,
    ]);
  }
}

module.exports = UserManager;
