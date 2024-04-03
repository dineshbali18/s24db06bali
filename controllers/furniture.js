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
exports.furniture_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: furniture create POST');
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
    