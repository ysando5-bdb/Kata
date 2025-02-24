import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';


function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [taskID, setNewTaskID] = React.useState('')
  const [nameTask, setNewNameTask] = React.useState('')
  const [description, setNewDescription] = React.useState('')



  //Petición al servidor
  const addTask = async () => {
    if (!taskID || !nameTask || !description) {
      alert('Por favor, completa todos los campos requeridos.');
      return; 
    }
      try {
          console.log('addTask: ', { taskID , nameTask , description})
          const response = await axios.post('/api/add-task', {  taskID , nameTask , description }) // Get o post, de acuerdo a la consulta por axios /{} 
          console.log('response: ', response)
          handleClose();
      } catch (err) {
          console.log(err)
      }
  }

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



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button color="success" variant="contained" onClick={handleClickOpen}> Agregar Tarea </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Agregar Tarea</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native"></InputLabel>
              <TextField required  id="taskID" label="Id tarea" variant="standard" name="taskID"  onChange={updateState}/>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native"></InputLabel>
              <TextField required id="nameTask" label="Nombre Tarea" variant="standard" name="nameTask" onChange={updateState} />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 420 }}>
              <InputLabel id="demo-dialog-select-label"></InputLabel>
              <TextField required id="description" label="Descripción" variant="filled" name="description" onChange={updateState}/>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addTask} disabled={!taskID || !nameTask || !description} >Agregar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogSelect