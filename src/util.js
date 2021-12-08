const fs = require("fs");
const path = require("path");

const writeToFile = (data) => {
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json.json"),
    JSON.stringify(data)
  );
};

const readFromFile = () => {
  const jsonData = fs.readFileSync(
    path.join(__dirname, "../db/db.json"),
    "utf-8"
  );

  return JSON.parse(jsonData);
};

module.exports = {
  writeToFile,
  readFromFile,
};
