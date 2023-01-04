let csvFile =
  "48.31,35.08,Днепр,1001094\n50.45,30.52,Киев,2868702\n50.02,36.14,Харьков,1451132\n46.49,36.58,Луганск,424113\n47.53,35.23,Запорожье,766268\n#wuiwhf\n\n46.58,32.12,Николаев,494922\n48.03,37.47,Донецк,949825\n49.53,24.16,Львов,729038\n47.07,37.40,Мариуполь,458533\n46.29,30.44,Одесса,1017022\n49.15,28.41,Винница,372116\n47.54,33.33,Кривой Рог,652137\n";

function parsingCsv(csv) {
  let csvData = csv
    .split("\n")
    .filter((element) => !element.includes("#"))
    .filter((element) => element.trim() != "")
    .map((element) => {
      let el = element.split(",");
      return {
        x: parseFloat(el[0]),
        y: parseFloat(el[1]),
        city: el[2],
        population: parseInt(el[3]),
      };
    })
    .sort((a, b) => b.population - a.population)
    .splice(0, 10)
    .reduce(
      (obj, item, count) => (
        (obj[item.city] = { population: item.population, rating: ++count }), obj
      ),
      {}
    );

  return (anyText) => {
    let cities = Object.keys(csvData);
    cities.forEach((city) => {
      if (anyText.includes(city)) {
        anyText = anyText.replace(
          city,
          city +
            ` (${csvData[city].rating} место в топ-10 самых крупных городов Украины, население ${csvData[city].population} человек)`
        );
      }
    });
    return anyText;
  };
}

console.log(parsingCsv(csvFile)("Львов самый лучший город"));
console.log(parsingCsv(csvFile)("Кривой Рог самый лучший город"));
console.log(parsingCsv(csvFile)("Николаев самый лучший город"));
console.log(parsingCsv(csvFile)("Мариуполь самый лучший город"));
console.log(parsingCsv(csvFile)("Донецк самый лучший город"));
console.log(parsingCsv(csvFile)("Запорожье самый лучший город"));
console.log(parsingCsv(csvFile)("Киев самый лучший город"));
console.log(parsingCsv(csvFile)("Харьков самый лучший город"));
console.log(parsingCsv(csvFile)("Одесса самый лучший город"));
console.log(parsingCsv(csvFile)("Днепр самый лучший город"));
console.log(parsingCsv(csvFile)("Луганск самый лучший город"));
