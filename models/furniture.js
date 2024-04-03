const mongoose = require("mongoose")
const furnitureSchema = mongoose.Schema({
material_type: String,
style: String,
price: Number
})
module.exports = mongoose.model("Furniture",
furnitureSchema)