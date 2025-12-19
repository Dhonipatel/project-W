const mongoose = require("mongoose");
const Chat = require("./models/chat.js")


main() . then(() => {
  console.log("conection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatapp');

}




let chats = [
    {
        from: "neha",
        to: "preeti ",
        msg: "send me  notes for exam",
        created_at: new Date(),
    },
     {
        from: "dhoni",
        to: "harshit ",
       msg: "teach me js callbacks",
        created_at: new Date(),
    },
     {
        from: "banti",
        to: "prince ",
        msg: "all the best!",
        created_at: new Date(),
    },
     {
        from: "tony",
        to: "peter",
        msg: "love you 3000",
        created_at: new Date(),
    },
];



 Chat.insertMany(chats);