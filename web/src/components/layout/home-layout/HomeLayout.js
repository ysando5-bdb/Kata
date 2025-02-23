import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskView() {
  const baseURL = "http://localhost:3000/api/tasks";  // URL de la API
  
  const [tasks, setTasks] = useState([]);  // Estado para almacenar las tareas
  const [error, setError] = useState(null);  // Estado para gestionar errores


  useEffect(() => {
    // Realizamos la solicitud POST
    axios.post(baseURL)
      .then((response) => {
        console.log("API Response:", response.data);  // Verifica la respuesta completa
        setTasks(response.data.task);  // Asignamos el array de tareas a 'tasks'
      })
      .catch((err) => {
        setError(err.message);  // Si ocurre un error, lo almacenamos
      });
  }, []);  // El arreglo vacío asegura que solo se ejecute cuando el componente se monte



  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task, index) => (  // Usamos .map() para iterar sobre el array de tareas
          <li key={index}>
            {task.taskID} - {task.nameTask}  
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskView;
