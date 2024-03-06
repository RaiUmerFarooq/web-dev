
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rai_umer_farooq:just1cause2@raiclustor.3hz9agw.mongodb.net/?retryWrites=true&w=majority&appName=RaiClustor";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    let db = client.db("sample_airbnb");
    let listrev=db.collection("listingsAndReviews");
    let result=await listrev.findOne({name: "Ocean View Waikiki Marina w/prkg"});
    // for await (const doc of result){
      console.log(result);
    // }
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
