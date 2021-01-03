module.exports = (line) => {
  let seperated = line.trim().split(" : ");

  if (!seperated[0].length) return ["emptyLine"];

  const date = seperated[0].split(" ");
  if (
    date.length === 4 &&
    date[0].endsWith("년") &&
    date[1].endsWith("월") &&
    date[2].endsWith("일") &&
    date[3].endsWith("요일")
  ) {
    if (seperated[0].startsWith("2020년 4월 2일")) console.log("FOUND");
    seperated.unshift("date");
    return seperated;
  }

  seperated.unshift("talk");
  return seperated;
};
