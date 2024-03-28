import  config  from "config";
import  express, { query }  from "express";
import cors from "cors";
import db from "./db.mjs";
const app = express();
const port=config.get('port');
// app.use(express.static(__dirname + '/'));
app.use(express.static('views' ));
app.use(cors());

 app.set('view engine','ejs');
app.get('/',(req,res) => {
 
  res.render('index.ejs');
})
// app.get('/search',(req,res) => {
//   res.render('index.ejs');
// })

app.get('/Mongo1',async(req,res)=>{
 const email =req.query.Email;
 const name=req.query.Name
  res.send(`${email}`)
  console.log(req.query);

  let  collection = db.collection('f219519');
await collection.insertOne({Email:`${email}, Name: ${name}, FirstName: ${req.query.firstName}`})
})
// app.get('/listingandreviews', async (req,res) => {
//   let  collection = db.collection('f219519');
// let result = await collection
// .find({})
// // .limit(3)
// .toArray();
// res.send(result).status(200);
// })

app.listen(port,console.log(`Server started at http://localhost:${port}`));