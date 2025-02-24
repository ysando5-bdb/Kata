const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/UserController')

async function validateUser(req, res) {
    try {
      const { email, password } = req.body;
      const response = await UserController.validateUser(email, password);
      console.log("response: ", response)

      if (response.error) {
        // Verifica si la respuesta contiene un error
        if (response.status === 401) {
          // Si el error es de autenticación
          return res.status(401).redirect('/')
        }
        // Si hay un error no relacionado con 401
        return res.status(response.status || 500).send(response.error);
      }
      //res.cookie('Authorization', 'Bearer '+ response.token);
      if(response.user != null){
        res.redirect(301, '../home');
      }
      //res.status(301).redirect('login', { layout: null, error: 'Usuario no encontrado'})
    } catch (error) {
      console.log('Error en validateUser: ', error);
      return res.status(500).send({ error: 'Error al procesar la solicitud' });
    }
  }


router.post('/login/validateUser', validateUser);

module.exports = router;