import  config  from "config";
import  express  from "express";
import cors from "cors";
import db from "./db.mjs";
const app = express();
const port=config.get('port');

app.use(cors());

app.get('/',(req,res) => {
    res.json('{"message": "Response Send"}')
})

app.get('/listingandreviews', async (req,res) => {
  let  collection = db.collection('user');
let result = await collection
.find({})
// .limit(3)
.toArray();
res.send(result).status(200);
})

app.listen(port,console.log(`Server started at http://localhost:${port}`));