const express = require('express');

// const express = require('express');
const router = express.Router();


//Llama al controlador
const UserController = require('../../controllers/UserController')


//Llama Middlewares
//const auth = require('../../midlewares/auth');
//const { route } = require('../views-routes/DashboardRouter');

async function validateUser(req, res) {
    try {
      const { email, password } = req.body;//Parametros de la petición
      console.log(req.body)
      const response = await UserController.validateUser(email, password);
      if (response.error) {
        return res.status(500).send(response);
      }
      return res.status(200).send(response);
    } catch (error) {
    }
  }


router.post('/api/validateUser', validateUser);


module.exports = router;