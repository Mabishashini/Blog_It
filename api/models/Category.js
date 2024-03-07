const mongoose = require("mongoose")

const CategorySchema = mongoose.Schema({
    name : {
        type : String,
        required : false
    }
}, {
    timestamps : true
})

module.exports = mongoose.model("Category", CategorySchema)