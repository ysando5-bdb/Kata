const Task = require('../db/model/Task.js')

//Logica de negocio
const TaskController = {
  async getTask(taskID) {
    try {
      const task = await Task.getTask(taskID);
      return { task };
    } catch (error) {
      console.log('Error en TaskController :: getTask :: ', error);
      return { error: 'Error al consultar tarea' }
    }
  }
};

module.exports = TaskController;