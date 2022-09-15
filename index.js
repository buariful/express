const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('server is running smoothlydddddddddddd')
})

app.get('/tomi', async (req, res) => {

    res.send("tomi")
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ki5j5b8.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const database = client.db("dateme").collection("users");

        app.get('/users', async (req, res) => {

            const query = {};
            const cursor = database.find(query);
            const users = await cursor.toArray();
            res.send(users)
        })

        app.get('/ami', async (req, res) => {

            res.send("ami")
        })
    }
    finally {

    }
}
run().catch(console.dir);

app.get('/ami', async (req, res) => {

    res.send("ami")
})

app.listen(port, () => {
    console.log(`app running ${port}`)
})