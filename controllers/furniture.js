var furniture = require('../models/furniture');
// List of all furnitures
exports.furniture_list = function(req, res) {
 res.send('NOT IMPLEMENTED: furniture list');
};
// for a specific furniture.
exports.furniture_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: furniture detail: ' + req.params.id);
};
// Handle furniture create on POST.
exports.furniture_create_post = async function(req, res) {
    console.log(req.body)
    let document = new furniture();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.material_type = req.body.material_type;
    document.price = req.body.price;
    document.style = req.body.style;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle furniture delete from on DELETE.
exports.furniture_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: furniture delete DELETE ' + req.params.id);
};
// Handle furniture update form on PUT.
exports.furniture_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: furniture update PUT' + req.params.id);
};

// List of all Furnitures
exports.furniture_list = async function(req, res) {
    try{
    theFurnitures = await furniture.find();
    res.send(theFurnitures);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
    //VIEWS
    // Handle a show all view
    exports.furniture_view_all_Page = async function(req, res) {
    try{
    thefurnitures = await furniture.find();
    console.log('aaaaaaaaaaaaaa',thefurnitures)
    res.render('furnishing', { title: 'furniture Search Results', results: thefurnitures });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    