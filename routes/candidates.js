var express = require('express');
var router  = express.Router();

/*GET candidates info */
router.get('/candidates', function(req, res) {
    var db = req.db;
    db.collection('candidates').find().toArray(function(err, items){
        res.json(items);
        // somehow we have to 
    });
});

module.exports = router;
