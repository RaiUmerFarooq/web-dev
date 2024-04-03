const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Todo = require('./modules/schema.js');
const { todo } = require('node:test');
require('dotenv').config()

const port = 3001;
app.use(express.json());
app.use(cors());

const connectionString = process.env.MONGO_URI

mongoose.connect(connectionString).then(()=> console.log('Connect to the DB..')).catch((err)=>console.log(err))


//routes 
app.get('/to-do-app', async(req,res)=> {
    const todos = await Todo.find();
    res.json(todos)
})
app.get('/to-do-app/delete/:id', async (req, res) => {
    try {
        const info = await Todo.findOne({ _id: req.body._id });
        if (info == null) {
            return res.status(404).json({ message: "Info not found" });
        }
        res.status(201).json(info);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.post('/to-do-app/new', async(req,res)=> {
    const task = await Todo.create(req.body)
    res.status(201).json({task})
})



app.get('/update', async(req,res)=>{
const result=await Todo.updateOne(res.body)
res.json(result);
})


app.listen(port, console.log(`server is running on port http://localhost:${port}`))