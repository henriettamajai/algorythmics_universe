const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());


const { MongoClient} = require('mongodb');
const uri = "mongodb+srv://majaihenrietta:XegWzdiCghZ12Kcn@cluster0.q6knev9.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    await client.db("algouniverse").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (e) {
    console.log(e)
    return
  }
}
run().catch(console.dir);

app.post('api/login', async (req, res)=> {
    
})

app.post('/api/register', async (req, res) => {
  try {
    const formData = req.body
    console.log(formData)
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.password_confirmation) {
      return res.status(400).json({ error: 'Incomplete data. Please provide all required fields.' });
    }



    const database = client.db("algouniverse");
    const collection = database.collection("UserCollection");

    const userDocument = {
        username: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }
    const result = await collection.insertOne(userDocument);

    console.log(`A document was inserted with the _id: ${result.insertedId}`);




    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
