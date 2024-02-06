import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express();

dotenv.config()

mongoose.connect(process.env.MongoDB_URL).then(()=>console.log("Connected to MongoDB")).catch((err)=> console.log(err))

// const UserSchema=new mongoose.Schema({
//     name:String,
//     age:Number
// });




// app.post("/register",function(req,res){

// })

app.get("/", (req, res) => {
    res.send("hello");
})

app.listen("5000", () => {
    console.log("API Working")
})