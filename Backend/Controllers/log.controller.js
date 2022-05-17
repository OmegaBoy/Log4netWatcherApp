const logService = require("../Services/log.service");

const test = async function (req, res) {
  var data = await logService.test();
  res.send(data);
};

module.exports = {
  test,
};
