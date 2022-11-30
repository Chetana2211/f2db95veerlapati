const mongoose = require("mongoose") 
const icecreamSchema = mongoose.Schema({ 
icecream_type: {
    type:String,
    required:["Icecream name is required."],
    required:["Icecream name cannot be empty."]
 }, 
 size:  {
    type:String,
    required:["Icecream size is required."],
    required:["Icecream size cannot be empty."]
 },
 cost:{
    type: Number,
    min:[5,"Cost Should be minimum of 5$ "],
    max:[50,"Cost Cannot be greater than 50$ "],
    required:["Icecream cost cannot be empty."]
}
})

module.exports = mongoose.model("icecreams", icecreamSchema) 

 