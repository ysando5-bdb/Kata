// gestiona y centraliza los routers de la aplicación
// importa en orden la lista de las vistas y las APIS
const express = require('express');


//const router = express.Router();

//Imports de API
const UserAPI = require('./api-routes/UserAPI')
//const ReceptorAPI = require('./api-routes/ReceptorAPI')
//const ReportAPI = require('./api-routes/ReportAPI')
//Tejido Verde
//const RecyclerAPI = require('./api-routes/RecyclerAPI')



//Imports de Vistas
const LoginRouter = require('./views-routes/LoginRouter');
const HomeRouter = require('./views-routes/HomeRouter');



//Objecto encargado de gestionar todas las rutas
const router = express.Router();


// API
router.use(UserAPI);
//router.use(ReceptorAPI);
//router.use(ReportAPI);
//Tejido Verde
//router.use(RecyclerAPI);

//Views
router.use(LoginRouter);
router.use(HomeRouter);
router.get('/login', renderLogin)
function renderLogin(req, res) {
  res.render('login');
}
 

module.exports = router;
