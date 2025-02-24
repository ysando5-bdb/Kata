import * as React from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';

function TaskDetails(props) {
  const [open, setOpen] = React.useState(false);  // Agrega el estado para controlar el Dialog
  const [taskID, setNewTaskID] = React.useState(props.taskID); // Inicializa con props.taskID
  const [nameTask, setNewNameTask] = React.useState(props.nameTask); // Inicializa con props.nameTask
  const [description, setNewDescription] = React.useState(props.description); // Inicializa con props.description

  const deleteTask = async () => {
    try {
      console.log('deleteTask: ', { taskID });
      const response = await axios.delete('/api/delete-task', { data: { taskID } });
      console.log('response: ', response);
    } catch (err) {
      console.log(err);
    }
  };

  // Petición PUT al servidor
  const updateTaskApi = async () => {
    try {
      console.log('updateTask: ', { taskID, nameTask, description });
      const response = await axios.put('/api/update-task', { taskID, nameTask, description });
      console.log('response: ', response);


      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  // Función para actualizar el estado cuando cambia un campo
  const updateState = (event) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    switch (name) {
      case 'taskID':
        return setNewTaskID(value);
      case 'nameTask':
        return setNewNameTask(value);
      case 'description':
        return setNewDescription(value);
      default:
        break;
    }
  };


  // Funciones para abrir y cerrar el diálogo
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  // El botón de actualización debe abrir el Dialog
  const updateTask = () => {
    return (
      <div>
        <Stack spacing={2} direction="row">
          <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Actualizar</DialogTitle>
            <DialogContent>
              <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {/* Ocultar el campo taskID si no debe ser editable */}
                <FormControl sx={{ m: 1, minWidth: 120 }} hidden>
                  <InputLabel htmlFor="taskID"></InputLabel>
                  <TextField id="taskID" label="Id Tarea" variant="standard" name="taskID" value={taskID} onChange={updateState} />
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel htmlFor="nameTask"></InputLabel>
                  <TextField id="nameTask" label="Nombre Tarea" variant="standard" name="nameTask" value={nameTask} onChange={updateState} />
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 420 }}>
                  <InputLabel htmlFor="description"></InputLabel>
                  <TextField id="description" label="Descripción" variant="filled" name="description" value={description} onChange={updateState} />
                </FormControl>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button onClick={updateTaskApi}>Actualizar</Button>
            </DialogActions>
          </Dialog>
        </Stack>
      </div>
    );
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} key={props.taskID}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" key={props.taskID}>
            {props.nameTask}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleClickOpen} size="small">Actualizar</Button>
          <Button onClick={deleteTask} size="small">Eliminar</Button>
        </CardActions>
      </Card>
      {updateTask()} {/* Llamar la función que contiene el formulario */}
    </div>
  );
}

export default TaskDetails;
