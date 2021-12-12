const fs = require("fs");
const path = require("path");

const writeToFile = (filePath, data) => {
  fs.writeFileSync(path.join(__dirname, filePath), JSON.stringify(data));
};

const readFromFile = (filePath) => {
  const content = fs.readFileSync(path.join(__dirname, filePath), "utf-8");

  return JSON.parse(content);
};

module.exports = {
  writeToFile,
  readFromFile,
};
