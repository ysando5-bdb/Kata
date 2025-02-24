import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskDetails from '../../custom/TaskDetails';
import FomrAddTask from '../../custom/FormAddTask';

//Estilos y Componentes UI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

function TaskView() {
  const baseURL = "http://localhost:3000/api/tasks";  // URL de la API
  const [tasks, setTasks] = useState([]);  // Estado para almacenar las tareas


  useEffect(() => {
    // Realizamos la solicitud POST
    axios.post(baseURL)
      .then((response) => {
        console.log("API Response:", response.data);  // Verifica la respuesta completa
        setTasks(response.data.task);  // Asignamos el array de tareas a 'tasks'
      })
  }, []);  // El arreglo vacío asegura que solo se ejecute cuando el componente se monte



  const renderTasks = () => {
    if (tasks.lenght === 0) {
      return (
        <div>Sin tareas para mostrar</div>
      );
    }
    return tasks.map(task => {
      return (
        <div>
          <TaskDetails {...task} />
        </div>

      )
    })
  };

  

  return (
    <div>
      <AppBar position="absolute" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Gestor de Tareas | Kata Beginner - Challenge 1 | YSANDO5
          </Typography>
          <Stack spacing={2} direction="row">
            <FomrAddTask />
          </Stack>
        </Toolbar>
      </AppBar>
      <Box>
        {renderTasks()}
      </Box>
    </div>
  );
}
export default TaskView;
