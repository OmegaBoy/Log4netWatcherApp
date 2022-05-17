const fs = require("fs/promises");

const readFile = async function (dir, encoding) {
  var error;
  var data;
  try {
    data = await fs.readFile(dir, { encoding: encoding ?? "utf8" });
  } catch (err) {
    error = err;
  }
  return { data, error };
};

module.exports = { readFile };
