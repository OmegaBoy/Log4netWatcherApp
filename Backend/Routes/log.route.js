const express = require("express");
const router = express.Router({ mergeParams: true });

const logController = require("../Controllers/log.controller");

router.route("/test").get(logController.test);

module.exports = router;
