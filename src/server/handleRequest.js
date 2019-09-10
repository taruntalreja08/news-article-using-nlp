function validateRequest(req, res, next) {
    if(!req.body.text ) {
        return res.status(400).json({
           message: 'Invalid input'
        })
    } 
    return next();
}

function registerPostHandler(req, res, next) {
    
    var aylien = require("aylien_textapi");
    var textapi = new aylien({
        application_id: "83fdf260",
        application_key: "524ae24b87b4576d9b54f3af73047f9d"
    });
    console.log("Calling aylien api for article analysis: ", req.body.text);
    textapi.sentiment({
      'url': req.body.text
    }, function(error, response) {
        res.send(response)
    }); 
 
}

exports.validateRequest = validateRequest;
exports.registerPostHandler = registerPostHandler;
