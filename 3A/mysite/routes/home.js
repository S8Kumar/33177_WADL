const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    //res.send("Home Router Test");
    res.render('home', { title: 'My Homepage' });
});

module.exports = router;