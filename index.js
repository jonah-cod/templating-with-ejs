const express = require("express");
const ejs = require("ejs");
require("dotenv").config();
const path = require("path")


const app = express();
app.set("view engine", "ejs")

const user = {
      name: "Theodore Kelechukwu O.",
      stack: "MERN",
      email: "theodoreonyejiaku@gmail.com",
      hobbies: ["singing", "playing guitar", "reading", "philosoph"]
    }

    const users = [{
      name: "John Smith.",
      stack: "MERN",
      email: "john@gmail.com",
      hobbies: ["rock climbing",  "singing"]
    },
    {
      name: "Kelly Ray",
      stack: "MERN",
      email: "kelly@gmail.com",
      hobbies: ["swimming", "playing guitar", "philosoph"]
    },
    {
      name: "Walden Schimit",
      stack: "MERN",
      email: "walden@gmail.com",
      hobbies: ["writing poems", "watching movies"]
    }
]

app.use(express.static("public"))
app.get("/", (req,res)=>{
      res.render("index", {user, users});
})

app.get("/users", (req, res)=>{
      let template;
      ejs.renderFile(path.join(__dirname, "/views/index.ejs"), {user, users}, (err, result)=>{
            if(err){
                  console.log(err)
            }
            console.log(result)
            template = result;
            res.send(template)
      })
      // res.send(users)      
})

const port = process.env.PORT;

app.listen(port, ()=>console.log(`App listening on Port: ${port}`))