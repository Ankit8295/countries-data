const countriesData = require("./countries.json");
const countriesLength = require("./numberlength.json");

const fs = require("fs");

const final = [];

countriesData.forEach((e) => {
  countriesLength.forEach((c) => {
    if (e.iso["alpha-2"] === c.code) {
      final.push({
        ...e,
        phoneLength: c.phoneLength
          ? typeof c.phoneLength == []
            ? c.phoneLength
            : [c.phoneLength]
          : [],
      });
    }
    return;
  });
});

fs.writeFile("last.json", JSON.stringify(final), (err) => {
  if (err) console.log(err);
  else {
    console.log("File written successfully");
  }
});

// function getData(fields) {
//   return countriesData.map((country) => {
//     data = { country: country.country };
//     fields.forEach((field) => {
//       data = { ...data, [field]: country[field] };
//     });
//     return data;
//   });
// }

// console.log(getData(["capital", "currency"]));

// // console.log(countries);
