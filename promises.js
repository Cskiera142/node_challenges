const fsPromises = require("fs").promises;

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile("./inputFile.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

fileOps();
