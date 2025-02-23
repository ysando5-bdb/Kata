const Tasks = require('../Tasks.json');
const fs = require('fs');  // Necesitamos el módulo fs para manipular archivos

Tasks.getTask = async (taskID) => { //Consulta ID tarea

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
        const content = JSON.stringify(Tasks, null, 2);

        fs.writeFile('../Tasks.json', content, 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Tarea agregada exitosamente.");
        });
    } catch (error) {
        console.error("Error al agregar la tarea:", error);
    }
};

Tasks.deleteTask = async (taskID) => {
    try {
        // Buscar la tarea por taskID
        const taskIndex = Tasks.findIndex(task => task.taskID === taskID);
        
        if (taskIndex === -1) {
            console.log("Tarea no encontrada para eliminar");
            return { error: "Tarea no encontrada" };
        }

        // Eliminar la tarea
        const deletedTask = Tasks.splice(taskIndex, 1)[0]; // Elimina y obtiene el elemento

        // Guardar el archivo actualizado
        const content = JSON.stringify(Tasks, null, 2);
        fs.writeFile('../Tasks.json', content, 'utf8', function (err) {
            if (err) {
                return console.log("Error al guardar el archivo:", err);
            }
            console.log("Tarea eliminada con éxito:", deletedTask);
        });

        return { success: "Tarea eliminada con éxito", task: deletedTask };
    } catch (error) {
        console.error("Error al eliminar la tarea:", error);
        return { error: "Error al eliminar la tarea" };
    }
};

module.exports = Tasks;
