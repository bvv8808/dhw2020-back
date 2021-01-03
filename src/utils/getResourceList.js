const fs = require("fs");

const getResourceList = () =>
  new Promise((resolve, reject) => {
    fs.readdir("./public/assets/resource", (err, fileList) => {
      console.log("# getResourseList: fileList.length: ", fileList.length);
      if (err) {
        console.log("#getResourceList# ", err);
        resolve([]);
      } else resolve(fileList);
    });
  });

module.exports = getResourceList;
