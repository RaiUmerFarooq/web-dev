import  config  from "config";
import {MongoClient} from "mongodb";
const uri = config.get("dbURL");
const client = new MongoClient(uri);
let conn;
try{
conn=await client.connect();
console.log("connected");
} catch (e) {
    console.log("nothig");
}

let db = conn.db("sample_guides");

export default db;