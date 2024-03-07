const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require("bcrypt")

router.post("/register", async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    try{
        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashedPassword
        })

        const user = await newUser.save()
        return res.status(200).json(user)
    }
    catch(err){
        return res.status(500).json(err)
        
    }
})

router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({username : req.body.username})
        if(!user) {
            return res.status(400).json("Invalid Username or Password")
        }
        const validate = await bcrypt.compare(req.body.password, user.password)
        if(!validate) {
            return res.status(400).json("Invalid Username or Password")
        }
        const{password, ...others} = user._doc;
        return res.status(200).json(others)
    }
    catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

module.exports = router