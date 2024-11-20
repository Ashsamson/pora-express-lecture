const express= require("express");
const bodyParser= require("body-parser")
const app = express();
//get form element*
//const form = document.getElementById('myform')
let PORT = 3001;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    //res.send("hello world")
   
    res.sendFile(__dirname + "/today.html");

});

app.post('/', (req, res) => {
    let data = req.body;

    //res.send("confirm your informations are correct " + JSON.stringify(data));
    let username = req.body.username
    let password = req.body.password

    
    //console.log(req.body);
    
   console.log("username: "+ username)
   console.log("password: "+ password)
    res.send("logged in sucessfull!!!" );
})


app.listen(PORT, ()=>{
    console.log("server is listening on port: " + PORT);
})