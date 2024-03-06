const express=require("express");
const cors=require("cors");
const corsOption = {
    origin:'*',
    optionSuccessStatus: 200
};
let user = [
    {ein: "raifarooq7860786@gmail.com", pin: "121212"}
];
const port = 3001;
const app = express()
app.use(express.static('public'));
app.use(cors(corsOption))
app.get("/",cors(corsOption),(req, res) => {
    res.sendFile("index.html")
})
app.get("/login",cors(corsOption),(req, res) => {
    let email=req.query.ein;
  let pass=req.query.pin;
    let ch1=0;+6
    user.forEach(el => {
        if(el.ein==email && el.pin==pass){
            ch1=1;
        }
    });
    if(ch1==1){
        res.send("successfully logined");
    }
    else{
        res.send("failed");
    }
})
app.listen(port, () => {
    console.log(`Server started on port: http://localhost:${port}`);
})