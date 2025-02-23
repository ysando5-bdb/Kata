const User = require('../db/model/User.js')

//Logica de negocio
const UserController = {
  async validateUser(email, password) {
try {
  const user = await User.checkCredentials(email, password);
  return {user};
} catch (err) {
  console.log('Error en UserController :: validateUser :: ', err);
  return {error: 'Error al iniciar sesión'}
}
    
  }


};

module.exports = UserController;
