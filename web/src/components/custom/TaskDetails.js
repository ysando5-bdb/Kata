import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function TaskDetails(props) {
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
          <Button size="small">Actualizar</Button>
          <Button size="small">Eliminar</Button>
        </CardActions>
      </Card>
    </div>

  );
}

export default TaskDetails