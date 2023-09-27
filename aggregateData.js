const fs = require("fs").promises;

// Define the file paths for the data files.
const dataFilePath1 = "./data1.js";
const dataFilePath2 = "./data2.js";

// Function to read data from a file using async/await.
const readDataFromFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return data; // Assuming the data in the files is in JSON format
  } catch (error) {
    console.error(`Error reading data from ${filePath}: ${error.message}`);
    return null;
  }
};

const aggregateData = async () => {
  try {
    const [data1, data2] = await Promise.all([
      readDataFromFile(dataFilePath1),
      readDataFromFile(dataFilePath2),
    ]);

    if (data1 && data2) {
      const aggregatedData = {
        dataFromEndpoint1: data1,
        dataFromEndpoint2: data2,
      };
      console.log("Aggregated Data:", aggregatedData);
    } else {
      console.log("Unable to aggregate data due to file read errors.");
    }
  } catch (error) {
    console.error("Error aggregating data:", error.message);
  }
};

aggregateData();
