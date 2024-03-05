const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri ="mongodb+srv://mongo-1234:zEj6QmoxzvEFQmgv@cluster0.otxrshk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);


async function run() {
  try {
    await client.connect();

    const database = client.db('registros');
    const usuarios = database.collection('usuarios');

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    console.log( await usuarios.findOne(query));
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


