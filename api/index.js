const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")


const app = express();

dotenv.config()

app.use(express.json())

mongoose.connect(process.env.MongoDB_URL).then(()=>console.log("Connected to MongoDB")).catch((err)=> console.log(err))

app.use("/api/auth", authRoute)

app.get("/", (req, res) => {
    res.send("hello");
})

app.listen("5000", () => {
    console.log("API Working")
})