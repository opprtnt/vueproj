const db = require("../db");

class TableController {
  async getTableEntry(req, res) {
    const tableData = await db.query("SELECT * FROM any_data");
    res.json(tableData.rows);
  }
}

module.exports = new TableController();
