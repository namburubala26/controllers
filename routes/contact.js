const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
router.get('/contact', (req , res , next) => {
    // console.log('In another middleware!');
    res.sendFile(path.join(rootDir,'views','contact.html'));
});
router.post('/contact', (req, res, next) => {

    console.log(req.body);
    res.redirect('/success');
})
module.exports = router;