const express= require("express");
const bodyParser= require("body-parser")
const app = express();
//get form element*
//const form = document.getElementById('myform')
let PORT = 3001;

//added a json data
let students = [
    { "name": "Tunde Oni", "course": "Political Science", "matric_no": "144300DC", "id": 1},
    { "name": "Jude Martins", "course": "Microbiology", "matric_no": "360189DC", "id": 2 },
    { "name": "Amarachi Uzoigwe", "course": "ICT", "matric_no": "100822DC", "id": 3},
    { "name": "Emmanuel Yinka", "course": "Microbiology", "matric_no": "109232DC", "id": 4},
    { "name": "Hassan Salami", "course": "Linguistics", "matric_no": "144310DC", "id": 5}
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//function to get general data 
app.get('/', (req, res) => {
    res.status(200).json(students);
    //res.send("hello world")
   // res.sendFile(__dirname + "/today.html");

});


//funtion to get filter for a particular student usin Id
app.get("/:id", (req, res)=>{
 let singlestudent= students.find((item) => {

    if (item.id !== req.params.id){
        res.send("ID does not exist");
    }
    else{
        return item.id === parseInt(req.params.id);
    }
  });
 try{
    if(singlestudent){
        res.status(200).json(singlestudent);
    }
    
    } catch(err){
   res.sendstatus(500)
  }
});

// api ti post/add item to the array
app.post("/add", (req, res) => {
    //function to mapp , checking the highest id, it get the maximum number and add 1 to it    let item = student.map((item) => {
    let items = students.map(item => item.id);
    let newId = items.lenght > 0 ? Math.max.apply(Math, items) + 1 : + 1;
    //let newid = if(items.lenght > 0){Math.max.apply(Math, items) + 1} else{1};
    console.log(typeof(items))
//function to push, update my own item into the array
    let newitem = {
        
        name : req.body.name,
        course : req.body.course,
        matric_no : req.body.matric_no,
        id : newId
       
    }
    // function to push new item into the arrey
    students.push(newitem);
    res.status(200).json({
        "message": "data created sucessfully "
    })
});

//ASSIGNMENT SOLUTION

//API to delet data using the hppt delete method
app.delete("/:id", (req, res) =>{
    let id = parseInt(req.params.id)
    let index = students.findIndex(() =>
        students.id === id);
    if (index !== -1 ) {
        students.splice(index, 1);
        res.status(200).json({
            message : "student deleated sucessfully"
        
        })
    } else{
        res.status(404).json({
            message :"you are currently unable to deleate student data"
        })
    }
})
// API to update data using HTTP PUT method
app.put("/students/:id", (req, res) => {
    //this function is to compare id
    let id = parseInt((req.params.id))
    let index = students.findIndex(() =>
    (students.id) === id);
   
    //statement to check if the idex exists
    if (index !== -1 ) {
        students[index].name = req.body.name;
        students[index].course = req.body.course;
        students[index].matric_no = req.body.matric_no;
        res.json({
            message : "studdent data has been updated sucessfuly"
        })
    }else{
        res.status(404).json({
            message: "stedent not found"
        })
    }
})


//////end of assigment 
 
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