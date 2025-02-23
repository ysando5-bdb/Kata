const express = require('express');
//const { Redirect } = require('react-router');
const router = express.Router();

//Llama al controlador
const TaskController = require('../../controllers/TaskController')

async function getTask(req, res) {
    const {taskID , nameTask} = req.body;
    console.log(req.body)
    const response = await TaskController.getTask(taskID , nameTask); //se le pasa a la funcion del modelo el parametro recibido 
    if (response.error) {
        return res.status(500).send(response);
    }
    return res.status(200).send(response);
}

async function addTask(req, res) {
    try {
      const { taskID, nameTask, description } = req.body;
      const response = await TaskController.addTask(taskID, nameTask, description);

      
      if (response.error) {
        return res.status(500).send(response);
      }
      return res.status(200).send(response);
    } catch (error) {
      console.log('Error en AddTaskAPI :: addTask ::', error)
      return res.status(500).send({ error: 'Error inesperado' })
    }
  
  }

router.post('/api/add-task' , addTask);
router.post('/api/tasks' , getTask);
module.exports = router;
