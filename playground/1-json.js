const fs = require("fs");

const data = {
  name: "John",
  planet: "Earth",
  age: 20,
};

const reading = fs.readFileSync("1-json.json").toString();

const readingObj = JSON.parse(reading);

readingObj.name = "Sam";
readingObj.age = 30;

const userJSON = JSON.stringify(readingObj);

fs.writeFileSync("1-json.json", userJSON);

const newReading = fs.readFileSync("1-json.json").toString();
const newData = JSON.parse(newReading);

console.log(newData.name);
