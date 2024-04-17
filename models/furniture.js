const mongoose = require("mongoose")
const furnitureSchema = mongoose.Schema({
material_type: {
    type: String,
    minlength: 1,
    maxlength:20,
},
style: {
    type: String,
    minlength: 1,
    maxlength:20,

},
price: Number
})
module.exports = mongoose.model("Furniture",
furnitureSchema)