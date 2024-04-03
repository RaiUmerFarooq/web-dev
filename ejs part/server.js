let express=require("express");
let user = [
    {ein: "raifarooq7860786@gmail.com", pin: "121212"}
];
let ep="cal";
const port = 3001;
var app = express();
app.set('view engine','ejs');
app.use(express.static('views' ));

app.get(`/${ep}`,(req,res) => {
    res.render('calculator.ejs');
})

app.get("/",(req, res) => {
    let af= 'Basit';
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
app.post("/login",(req, res) => {
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
app.get('/final', (req,res)=>{
    let value=["Huzaifa","login"];
    res.render('index.ejs',{em:value})
})
app.listen(port, () => {
    console.log(`Server started on port: http://localhost:${port}`);
})