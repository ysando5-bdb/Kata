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
  },
  // función para agregar tareas
  async addTask(taskID, nameTask, description) {
    //Le pasa al usuario los campos del esquema
    const newTask = ({taskID, nameTask, description})
    console.log("newTask :: ",newTask)
    try {
      const task = await Task.addTask(newTask)
      return { task, message: 'Tarea agregada exitosamente', status: 200 };
    } catch (error) {
      console.log('Error en TaskController :: addTask :: ', error);
      return { error: 'Error al guardar la tarea', status: 500 };
    }
  },

  async deleteTask (taskID) {
    try {
      const deleteTask = await Task.deleteTask(taskID);
      return { deleteTask, status: 200 };
    } catch (error) {
      console.log('Error en TaskController :: deleteTask :: ', error);
      return { error: 'Error al eliminar la tarea', status: 500 };
    }
  },
};

module.exports = TaskController;