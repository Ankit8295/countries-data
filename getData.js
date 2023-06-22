const countriesData = require("./countries.json");
const countriesLength = require("./numberlength.json");
const last = require("./last.json");
const fs = require("fs");

const final = countriesData;

final.forEach((data) => {
  data.dial_code = data.dial_code.toString();
  data.phoneLength = data.phoneLength.toString();
});

// countriesLength.forEach((e) => {
//   countriesData.forEach((c) => {
//     if (e.country === c.country) {
//       final.push({
//         ...c,
//         phoneLength: e.phLength,
//       });
//     }
//     return;
//   });
// });

fs.writeFile("ultraLast.json", JSON.stringify(final), (err) => {
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
