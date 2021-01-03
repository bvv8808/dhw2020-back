module.exports = function* (text) {
  const textLen = text.length;
  let position = 0;
  let idx = 0;
  while (true) {
    idx = text.indexOf("\n", position);
    if (idx === -1 || idx >= textLen) break;

    yield text.substring(position, idx);
    position = idx + 1;
  }
};
