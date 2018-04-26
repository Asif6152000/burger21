var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(data=>{
    console.log(data);
    let hbsObject = {
      burgers: data
    }
    res.render("index", hbsObject);
  })
});

router.post("/api/add-burger", function(req, res) {

  console.log(req.body)
  burger.create(["burger_name"], [req.body.burger], function(result){
    console.log(result)
  })
});

module.exports = router;