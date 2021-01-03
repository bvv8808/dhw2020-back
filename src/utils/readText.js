const fs = require("fs");

const trimData = (text) => {
  let cnt = 0;
  let cutIdx = 0;
  while (cnt < 5) {
    const idx = text.indexOf("\n", cutIdx + 1);
    cnt++;
    cutIdx = idx;
  }

  return text.substr(cutIdx + 1);
};

module.exports = (filepath) =>
  new Promise((resolve, reject) => {
    fs.readFile(filepath, "utf8", (err, data) => {
      if (err) {
        console.log("#readText# ", err);
        resolve("");
      } else {
        resolve(trimData(data));
      }
    });
  });
