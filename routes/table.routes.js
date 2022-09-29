const Router = require("express");
const router = new Router();
const tableController = require("../controller/table.controller");

router.get("/table", tableController.getTableEntry);

module.exports = router;
