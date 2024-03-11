const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer")
const path = require("path")

const app = express();

dotenv.config()

app.use(express.urlencoded({ extended: true }));

app.use(express.json())

app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(process.env.MongoDB_URL).then(()=>console.log("Connected to MongoDB")).catch((err)=> console.log(err))

const images = "./images"

const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null, images)
    },
    filename : (req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({storage: storage})

app.post("/api/upload", upload.single("file"), (req,res) => {
    res.status(200).json("Image has been successfully uploaded")
})

app.use("/api/auth", authRoute)

app.use("/api/user", userRoute)

app.use("/api/post", postRoute)

app.use("/api/categories", categoryRoute)

app.get("/", (req, res) => {
    res.send("hello");
})

app.listen("5000", () => {
    console.log("API Working")
})