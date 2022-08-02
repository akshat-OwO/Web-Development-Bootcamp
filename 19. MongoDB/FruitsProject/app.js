const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('fruitsDB');
    const fruits = database.collection('fruits');

    const findResult = await fruits.find({});
    await findResult.forEach(console.dir);


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);