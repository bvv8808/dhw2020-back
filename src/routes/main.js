const router = require("express").Router();
const {
  readLineGen,
  seperateLine,
  readText,
  getResourceList,
  imgToBase64,
} = require("../utils");
const fs = require("fs");

router.get("/texts", async (req, res) => {
  const lineLimit = req.query.lineLimit ? Number(req.query.lineLimit) : 5;
  const data = await readText(`./public/assets/talk/wholeTalk.txt`);
  const resourceList = await getResourceList();

  let lineNo = 1;
  let resultArr = [];
  for (let line of readLineGen(data)) {
    // console.log(`#${lineNo++} `, line.length, line);
    resultArr.push(seperateLine(line));
    if (lineNo++ > lineLimit) break;
  }

  res.json({ code: 0, talks: resultArr, resourceList });
});

router.post("/login", (req, res) => {
  const { uid, pw } = req.body;
  const envPassword = process.env[uid];
  if (!envPassword) res.send("wrong id");
  else if (envPassword !== pw) res.send("wrong pw");
  else res.json({ code: 1, uid });
});

router.get("/getImg", (req, res) => {
  const { fileName } = req.query;
  console.log("# getImg : ", fileName);
  res.json({ code: 0, data: imgToBase64(fileName) });
});

router.get("/streamVideo", (req, res) => {
  const { filename } = req.query;
  const filepath = `./public/assets/resource/${filename}`;
  const stream = fs.createReadStream(filepath);
  let cnt = 0;

  stream.on("data", (data) => {
    cnt++;
    res.write(data);
  });

  stream.on("end", () => {
    console.log("# End streaming : ", cnt);
    res.end();
  });

  stream.on("error", (err) => {
    console.log(err);
    res.end("# 500 ERR. ", err);
  });
});

router.get("/streamAudio", (req, res) => {
  const { filename } = req.query;
  const filepath = `./public/assets/resource/${filename}`;
  const stream = fs.createReadStream(filepath);
  let cnt = 0;

  stream.on("data", (data) => {
    cnt++;
    res.write(data);
  });

  stream.on("end", () => {
    console.log("# End streaming : ", cnt);
    res.end();
  });

  stream.on("error", (err) => {
    console.log(err);
    res.end("# 500 ERR. ", err);
  });
});

module.exports = router;
