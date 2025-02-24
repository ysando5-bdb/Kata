const express = require('express');
const router = express.Router();

// Llama al controlador
const UserController = require('../../controllers/UserController');

// Llama Middlewares
// const auth = require('../../midlewares/auth');

async function validateUser(req, res) {
  try {
    const { email, password } = req.body; // Parámetros de la petición
    const response = await UserController.validateUser(email, password);
    console.log(req.body);


    if (response.error) {
      // Verifica si la respuesta contiene un error
      if (response.status === 401) {
        // Si el error es de autenticación
        return res.status(401).render('login', { layout: null, error: 'Usuario no encontrado' });
      }
      // Si hay un error no relacionado con 401
      return res.status(response.status || 500).send(response.error);
    }

    // Si la autenticación es exitosa
    return res.status(200).send(response.user); 
  } catch (error) {
    console.log('Error en validateUser: ', error);
    return res.status(500).send({ error: 'Error al procesar la solicitud' });
  }
}

router.post('/api/validateUser', validateUser);

module.exports = router;
