var icecreams = require('../models/icecream'); 
 
// List of all icecreams
exports.costume_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: icecreams list'); 
}; 
 
// for a specific icecream. 
exports.icecream_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: icecream detail: ' + req.params.id); 
}; 
 
// Handle icecream create on POST. 
exports.icecream_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new icecreams(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"icecream_type":"butterscotch", "cost":15, "size":"large"} 
    document.icecream_type = req.body.icecream_type; 
    document.cost = req.body.cost; 
    document.size = req.body.size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle icecream delete form on DELETE. 
exports.icecream_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: icecream delete DELETE ' + req.params.id); 
}; 
 
// Handle icecream update form on PUT. 
exports.icecream_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: icecream update PUT' + req.params.id); 
}; 
// List of all icecream 
exports.icecream_list = async function(req, res) { 
    try{ 
        theicecreams = await icecreams.find(); 
        res.send(theicecreams); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// VIEWS 
// Handle a show all view 
exports.icecream_view_all_Page = async function(req, res) { 
    try{ 
        theicecreams = await icecreams.find(); 
        res.render('icecream', { title: 'Icecream Search Results', results: theicecreams }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
