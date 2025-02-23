// Cargar el archivo JSON usando require()
const Tasks = require('../Tasks.json');

Tasks.getTask = async (taskID) => { //Consulta ID tarea

    console.log("taskID ::::   ", taskID);  // Mostrar el taskID recibido
    let taskFound = null;

    // Buscar la tarea usando forEach
    Tasks.forEach(task => {
        if (task.taskID === taskID) {  // Compara el taskID recibido con el taskID de cada tarea
            console.log("Tarea encontrada");
            taskFound = task;
        }
        else{

            taskFound = Tasks
        }
    });

    console.log("Tarea: ", taskFound);  // Mostrar la tarea encontrada
    return taskFound;  // Devuelve la tarea encontrada o null si no se encuentra
};

module.exports = Tasks;
