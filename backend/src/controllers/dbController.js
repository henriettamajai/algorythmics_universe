const { MongoClient } = require("mongodb");

const db = {
  uri: "mongodb+srv://majaihenrietta:XegWzdiCghZ12Kcn@cluster0.q6knev9.mongodb.net/?retryWrites=true&w=majority",
  client: null,
};

async function initDatabase() {
  try {
    db.client = new MongoClient(db.uri);
    db.client.connect();
    await db.client.db("algouniverse").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (e) {
    console.log(e);
    return;
  }
}

module.exports = { initDatabase, db };
