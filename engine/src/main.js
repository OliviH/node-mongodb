import express from 'express'
import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.URL_MONGO)

async function run() {
    try {
      await client.connect();
      const database = client.db('test');
      const foods = database.collection('foods');
      // Query for a movie that has the title 'Back to the Future'
      const query = { title: 'Back to the Future' };
      const docs = [
        { name: "cake", healthy: false },
        { name: "lettuce", healthy: true },
        { name: "donut", healthy: false }
      ];
      const options = {
        // sort returned documents in ascending order by title (A->Z)
        sort: { name: 1 },
        // Include only the `title` and `imdb` fields in each returned document
        projection: { _id: 1, name: 1, healthy: 1 },
      };
      const result = await foods.insertMany(docs, options);
      console.log(`${result.insertedCount} documents were inserted`);
      const cursor = await foods.find({}, options);
      if ((await cursor.count()) === 0) {
        console.log("No documents found!");
      }
      await cursor.forEach(doc => {
          console.log(doc._id.toString(), doc.name, doc.healthy)
      });
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

const app = express()

app.get('/', (req,res) => {
    res.json({
        message: 'welcome',
        host: process.env.HOST,
        date: new Date().toISOString()
    })
})

app.listen(3000, ()=> {
    console.log(`server listen at http://${process.env.HOST}`)
    console.log(`EXPRESS listen at http://${process.env.HOST_EXPRESS}`)
})
console.log('https://medium.com/@sbesnier1901/premi%C3%A8re-api-rest-avec-node-js-et-mongodb-sous-docker-884bda9d8e07')