var furniture = require('../models/furniture');
// List of all furnitures
exports.furniture_list = function(req, res) {
 res.send('NOT IMPLEMENTED: furniture list');
};
// for a specific furniture.
exports.furniture_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await furniture.findById( req.params.id).exec()
    console.log(result);
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.furniture_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await furniture.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

// Handle furniture update form on PUT.
exports.furniture_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await furniture.findById( req.params.id).exec()
        // Do updates of properties
        if(req.body.material_type)
        toUpdate.material_type = req.body.material_type;
        if(req.body.price) toUpdate.price = req.body.price;
        if(req.body.style) toUpdate.style = req.body.style;
        let result = await toUpdate.save()  ;
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }
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
        res.render('furnishing', { title: 'furniture Search Results', results: thefurnitures });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
    };
    
    // Handle a show one view with id specified by query
    exports.furniture_view_one_Page = async function(req, res) {
        console.log("single view for id " + req.query.id)
        try{
        result = await furniture.findById( req.query.id)
        console.log(result)
        res.render('furnishingdetail',
        { title: 'Furniture Detail', toShow: result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
    }

    exports.furniture_create_Page = function(req, res) {
        console.log("create view")
        try{
            res.render('furnishingcreate', { title: 'Furnishing Create'});
        }
        catch(err){
            res.status(500)
            res.send(`{'error': '${err}'}`);
        }
    };
    
    exports.furniture_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
        try{
        let result = await furniture.findById(req.query.id)
        res.render('furnishingupdate', { title: 'Furniture Update', toShow: result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
    };

    exports.furniture_delete_Page = async function(req, res) {
        console.log("Delete view for id " + req.query.id)
        try{
        result = await furniture.findById(req.query.id).exec()
        console.log("QQQQQQQ!!!!!!!!!!!!",result)
        res.render('furnishingdelete', { title: 'furniture Delete', toShow:
        result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
        };       