const logService = require("../Services/log.service");
const { directories } = require("../../config.json");
const fileTool = require("../Tools/File.tool");

const test = async function () {
  var data = await fileTool.readFile(directories[0]);
  if (data.error) {
    throw "ERROR";
  }
  return data.data;
};

module.exports = {
  test,
};
