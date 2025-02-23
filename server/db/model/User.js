// Cargar el archivo JSON usando require()
const Users = require('../Users.json');

Users.checkCredentials = async (email, password) => { //Consulta credenciales de acceso
    let userFound = null;
    console.log("email: ",email , "password: ", password)
    // Buscar el usuario por correo electrónico y verificar la contraseña
    Users.forEach(user => {
        if (user.email === email) {
            console.log("Usuario encontrado")
            // Si encontramos el usuario por su correo, verificamos la contraseña
            if (user.password === password) {
                console.log("Usuario con contraseña correcta")
                userFound = user;
            } 
        }
    });
    console.log("Usuario: ", userFound)
    return userFound;
};

module.exports = Users;
