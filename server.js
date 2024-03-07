let express=require("express");
let user = [
    {ein: "raifarooq7860786@gmail.com", pin: "121212"}
];
const port = 3001;
var app = express();
app.set('view engine','ejs');
app.use(express.static('views' ));

app.get('/cal',(req,res) => {
    res.render('calculator.ejs');
})

app.get("/",(req, res) => {
    let af= 'use.ein';
    res.render('index.ejs',{em: af});
})
app.get("/login",(req, res) => {
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