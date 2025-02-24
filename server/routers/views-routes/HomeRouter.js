const express = require('express');
const router = express.Router();


function renderHome(req, res) {
   
    res.render('home', { layout: null })
}

function renderLogin(req, res) {
    res.render('login', { layout: null })
}
router.get('/home', renderHome);
router.post('/logout', renderLogin);


module.exports = router;
