module.exports = (text) => {
  let cnt = 0;
  let cutIdx = 0;
  while (true) {
    console.log("##", cutIdx);
    const idx = text.indexOf("\n", cutIdx + 1);
    console.log(text.substr(cutIdx, idx));
    cnt++;
    cutIdx = idx;
    if (cnt >= 5) break;
  }

  return text.substr(cutIdx + 1);
};
