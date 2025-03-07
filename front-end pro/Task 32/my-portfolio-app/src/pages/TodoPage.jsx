import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const TodoPage = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <Container>
      <TextField
        label="New task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button variant="contained" onClick={addTask} fullWidth>
      Add a task
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TodoPage;
