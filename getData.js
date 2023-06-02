const countriesData = require("./countries.json");

function getData(fields) {
  return countriesData.map((country) => {
    data = { country: country.country };
    fields.forEach((field) => {
      data = { ...data, [field]: country[field] };
    });
    return data;
  });
}

console.log(getData(["capital", "currency"]));

// console.log(countries);
