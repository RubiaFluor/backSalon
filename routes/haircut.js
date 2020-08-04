const express = require("express");
const router = express.Router();
const { hairCut } = require("../models/haircut");
const { auth } = require ("../middleware/auth");
const { Client } = require("../models/client");

router.post("/saveHair",auth, (req, res)=> {
    
    const cut = new hairCut(req.body);

    cut.save((err, cut)=> {
        console.log(err)
        if(err){
            return res.status(400).json({
                error:"Error save Hair Cut"
            });
        }
        res.json({cut}); 
    });
});

module.exports = router;