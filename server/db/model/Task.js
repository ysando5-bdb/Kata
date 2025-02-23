// Cargar el archivo JSON usando require()
const Tasks = require('../Tasks.json');
const fs = require('fs');  // Necesitamos el módulo fs para manipular archivos

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

Tasks.addTask = async (newTask) => {
    try {
        if (!newTask || typeof newTask !== 'object') {
            console.log("El nuevo objeto no es válido.");
            return;
        }
  
        if (!newTask.taskID || !newTask.nameTask) {
            console.log("El nuevo objeto debe contener 'taskID' y 'nameTask'.");
            return;
        }

        Tasks.push(newTask);
        const content = JSON.stringify(Tasks)

        //console.log("content :: ", content)
        fs.writeFile('../Tasks.json', content, 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
            return Tasks ;
        }); 
    } catch (error) {
        console.error("Error al agregar la tarea:", error);
    }
};


module.exports = Tasks;
