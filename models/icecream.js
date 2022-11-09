const mongoose = require("mongoose") 
const icecreamSchema = mongoose.Schema({ 
 icecream_type: String, 
 size: String, 
 cost: Number 
}) 

module.exports = mongoose.model("icecreams", icecreamSchema) 
