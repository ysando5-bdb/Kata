const User = require('../db/model/User.js')

//Logica de negocio
const UserController = {
  async validateUser(email, password) {
try {
  const user = await User.checkCredentials(email, password);
  if (user === null) {
    // Aquí podrías agregar lógica de lo que debería pasar si no existe el usuario.
    return { error: 'Usuario o contraseña incorrectos', status: 401 };
  }
  return {user};
} catch (err) {
  console.log('Error en UserController :: validateUser :: ', err);
  return {error: 'Error al iniciar sesión', status: 500}
}
    
  }
};

module.exports = UserController;
