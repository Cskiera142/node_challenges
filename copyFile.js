const fs = require("fs");

const inputFile = "inpute.txt";
const outputFile = "output.txt";

fs.readFile("./inputFile.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(`Error reading ${inputFile}: ${err.message}`);
    return;
  }

  fs.writeFile(outputFile, data, "utf8", (err) => {
    if (err) {
      console.error(`Error writing ${outputFile}: ${err.message}`);
      return;
    }
    console.log(`Contents of ${inputFile} have been copied to #{outputFile}`);
  });
});
