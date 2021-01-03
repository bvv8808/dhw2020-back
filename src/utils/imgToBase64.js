const fs = require("fs");

module.exports = (imgPath) => {
  const data = fs.readFileSync(`./public/assets/resource/${imgPath}`);
  return new Buffer.from(data).toString("base64");
};
