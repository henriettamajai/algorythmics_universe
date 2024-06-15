const mongoose = require("mongoose");

const uri =
  "mongodb+srv://majaihenrietta:XegWzdiCghZ12Kcn@cluster0.q6knev9.mongodb.net/?retryWrites=true&w=majority";

const options = {
  dbName: "algouniverse",
};

async function initDatabase() {
  await mongoose.connect(uri, options);
  console.log("Successfully connected to MongoDB with Mongoose!");

  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to the database.");
  });

  mongoose.connection.on("error", (err) => {
    console.error(`Mongoose connection error: ${err}`);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected from the database.");
  });
}

async function closeDatabase() {
  try {
    await mongoose.disconnect();
    console.log("Mongoose connection closed gracefully.");
  } catch (error) {
    console.error("Error while closing Mongoose connection:", error);
  }
}

module.exports = { initDatabase, closeDatabase };
