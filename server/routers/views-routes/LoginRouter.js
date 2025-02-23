const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/UserController')

async function validateUser(req, res) {
    try {
      const { email, password } = req.body;
      const response = await UserController.validateUser(email, password);
      console.log("response: ", response)
      if(response.error){
        throw new Error();
      }
      //res.cookie('Authorization', 'Bearer '+ response.token);
      if(response.user != null){
        res.redirect(301, '../home');
      }
      //res.status(301).redirect('login', { layout: null, error: 'Usuario no encontrado'})
    } catch (err) {
  res.status(400).render('/', { layout: null, error: 'Usuario no encontrado'})
    }
  }


router.post('/login/validateUser', validateUser);

module.exports = router;