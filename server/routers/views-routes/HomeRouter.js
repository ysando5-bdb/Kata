const express = require('express');
const router = express.Router();
//const auth = require('../../midlewares/auth')


function renderHome(req, res) {
    res.render('home', { layout: null })
}

function renderLogin(req, res) {
    res.render('login', { layout: null })
}
router.get('/login/home', renderHome);
router.post('/logout', renderLogin);

module.exports = router;
