var express=require("express");
var cors=require("cors");
var path=require('path');
let bodyParser=require("body-parser")
const corsOption = {
    origin:'*',
    optionSuccessStatus: 200
};
let user = [
    {ein: "raifarooq7860786@gmail.com", pin: "121212"}
];
const port = 3001;
var app = express()
app.use(bodyParser());
app.use(cors());
app.set('views', path.join(__dirname+"views"));
app.set('view engine','ejs');




app.get("/",(req, res) => {
    res.render('index.ejs')
})
// app.get("/login",cors(corsOption),(req, res) => {
//     let email=req.query.ein;
//   let pass=req.query.pin;
//     let ch1=0;+6
//     user.forEach(el => {
//         if(el.ein==email && el.pin==pass){
//             ch1=1;
//         }
//     });
//     if(ch1==1){
//         res.send("successfully logined");
//     }
//     else{
//         res.send("failed");
//     }
// })
app.listen(port, () => {
    console.log(`Server started on port: http://localhost:${port}`);
})