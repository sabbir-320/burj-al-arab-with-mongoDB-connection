
const express = require('express')
const app = express()
const port = 4000

// const pass = burj5661


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://burhj5661:burj5661@cluster0.nnldh.mongodb.net/burjAlArab?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("test").collection("bookings");
  // perform actions on the collection object
  console.log('mongodb collection successfully');
  client.close();
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port)