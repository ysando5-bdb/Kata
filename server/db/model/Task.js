const Tasks = require('../Tasks.json');
const fs = require('fs');  // Necesitamos el módulo fs para manipular archivos
const path = require('path');
const tasksFilePath = path.join(__dirname, '../Tasks.json');  // Esto asegura que estés apuntando al archivo correcto.


Tasks.getTask = async (taskID) => { //Consulta ID tarea

    let taskFound = null;

    // Buscar la tarea usando forEach
    Tasks.forEach(task => {
        if (task.taskID === taskID) {  // Compara el taskID recibido con el taskID de cada tarea
            console.log("Tarea encontrada");
            taskFound = task;
        }
        else {

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

        fs.writeFile(tasksFilePath, content, 'utf8', function (err) {
            if (err) {
                return console.log("Error al guardar el archivo:", err);
            }
            console.log("Archivo Tasks.json actualizado correctamente.");
        });
    } catch (error) {
        console.error("Error al agregar la tarea:", error);
    }
};



Tasks.deleteTask = async (taskID) => {
    try {
        // Encontrar el índice de la tarea que quieres eliminar
        Tasks.forEach(task => {
            if (task.taskID === taskID) {  // Compara el taskID recibido con el taskID de cada tarea
                console.log("Tarea encontrada");
                taskFound = task;
            }
            else{
    
                taskFound = Tasks
                return { success: "Tarea no encontrada", task: taskID };
            }
        });

        // Eliminar la tarea del array
        const deletedTask = Tasks.splice(taskFound, 1)[0];  // Esto elimina la tarea y la retorna

        // Guardar el archivo actualizado
        const content = JSON.stringify(Tasks, null, 2);
        fs.writeFile(tasksFilePath, content, 'utf8', function (err) {
            if (err) {
                return console.log("Error al guardar el archivo:", err);
            }
            console.log("Archivo Tasks.json actualizado correctamente.");
        });

        return { success: "Tarea eliminada con éxito", task: deletedTask };}catch (error) {
        console.error("Error al eliminar la tarea:", error);
        return { error: "Error al eliminar la tarea" };
    }
};
Tasks.updateTask = async (taskChange) => {
    try {
        // Buscar el índice de la tarea que quieres actualizar
        const taskIndex = Tasks.findIndex(task => task.taskID === taskChange.taskID);

        if (taskIndex === -1) {
            console.log("Tarea no encontrada para actualizar");
            return { error: "Tarea no encontrada" };
        }

        // Actualizar los valores de la tarea
        const updatedTask = Tasks[taskIndex] = { ...Tasks[taskIndex], ...taskChange };

        // Guardar el archivo actualizado
        const content = JSON.stringify(Tasks, null, 2);
        fs.writeFile(tasksFilePath, content, 'utf8', function (err) {
            if (err) {
                return console.log("Error al guardar el archivo:", err);
            }
            console.log("Archivo Tasks.json actualizado correctamente.");
        });

        return { success: "Tarea actualizada con éxito", task: updatedTask };
    } catch (error) {
        console.error("Error al actualizar la tarea:", error);
        return { error: "Error al actualizar la tarea" };
    }
}


module.exports = Tasks;
