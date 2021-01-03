const rt = require("./readText");
const rlg = require("./readLineGen");
const sl = require("./seperateLine");
const grl = require("./getResourceList.js");
const itb = require("./imgToBase64");

module.exports = {
  readText: rt,
  readLineGen: rlg,
  seperateLine: sl,
  getResourceList: grl,
  imgToBase64: itb,
};

exports.readText = rt;
exports.readLineGen = rlg;
exports.seperateLine = sl;
exports.getResourceList = grl;
exports.imgToBase64 = itb;
