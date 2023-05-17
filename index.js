const newJson = require("./countries.json");
const old = require("./countriesData.json");
const fs = require("fs");
// const final = [];
// old.forEach((e) => {
//   newJson.forEach((c) => {
//     if (c.ccn3 === e.isoCode) {
//       final.push({
//         country_name: c.name.common,
//         country_code: e.code,
//         iso_code: e.isoCode,
//         currency: c.currencies,
//         dial_code: e.dialling_code,
//         timezone: c.timezones,
//         region: c.region,
//       });
//     }
//     return;
//   });
// });

// fs.writeFile("last.json", JSON.stringify(final), (err) => {
//   if (err) console.log(err);
//   else {
//     console.log("File written successfully");
//   }
// });

console.log(old.length);
console.log(newJson.length);
