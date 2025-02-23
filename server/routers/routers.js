// gestiona y centraliza los routers de la aplicación
// importa en orden la lista de las vistas y las APIS
const express = require('express');


//const router = express.Router();

//Imports de API
const UserAPI = require('./api-routes/UserAPI')
const TaksAPI = require('./api-routes/TaskAPI')
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
router.use(TaksAPI);
//router.use(ReportAPI);
//Tejido Verde
//router.use(RecyclerAPI);

//Views
router.use(LoginRouter);
router.use(HomeRouter);
router.get('/', renderHome)
function renderHome(req, res) {
  res.render('home');
}
 

module.exports = router;
