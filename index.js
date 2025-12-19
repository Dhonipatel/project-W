const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const { render } = require("ejs");
const { log } = require("console");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine ", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended: true}));


main() . then(() => {
  console.log("conection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatapp');

}

//index route

app.get("/Chats", async(req, res) => {
  let chats = await Chat.find();
  console.log(chats);
 res.render("index.ejs", {chats})
  
} )

// NEW ROUTE
app.get("/chats/new", (req, res) => {
  res.render("new.ejs")

});

// Create Route

app.post("/chats", async(req, res, next) => {
  console.log(req);
  
  let { from, to , msg} = req.body;
  let newChat = new Chat ({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  
  await newChat.save();
  res.redirect("/chats");
});

// NEW - SHOW ROUTE
 app.get("/chats/:id", async (req, res, next) => {
  let { id } = req.params;
  let chat = await chat.findById(id);
  res.render("edit.js", {chat});
 });


// EDIT ROUTE

app.get("/chats/:id/edit", async (req, res) => {
  let {id} = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", {chat});
});


app.get("/", (req, res) =>  {
  res.send("root is working");
  
});

app.listen(8080, () => {
  console.log("server is listening on port 8080");
  
});












