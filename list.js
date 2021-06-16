const express = require("express")
const bodyParser = require("body-parser")

const app = express();

var items =["Eat", "code", " learn", "rest"];

app.use(bodyParser.urlencoded({extension:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/", function(req,res){

   let today = new Date();

   const options =
   { weekday: 'long',
     year: 'numeric',
     month:'long',
     day: 'numeric' };

   let currentDay = today.toLocaleDateString("en-US",options);

   res.render("todo_list",{todayDate : currentDay, newItems : items});
})

app.post("/" , function(req,res){
  let item = req.body.addItem;
  items.push(item);
  res.redirect("/");
})

app.listen(port = 3000 , function(){
  console.log("server at port 3000")
})
