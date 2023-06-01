import React, { useEffect, useState } from 'react';
import {
  TextField,
  Typography,
  IconButton,
  Box,
  Drawer,
  Dialog,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './RightDrawer.css';

export default function RightDrawer({ todo, editItem }) {
  const [state, setState] = useState({
    right: false,
    taskTitle: todo.task,
    taskDescription: '',
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [note, setNote] = useState(todo.note || '');

  useEffect(() => {
    const updatedTodo = { ...todo, note };
    editItem(updatedTodo);
  }, [note, editItem, todo]);

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleTaskChange = event => {
    event.stopPropagation();
    const updatedTask = { ...todo, task: event.target.value };
    editItem(updatedTask);
  };

  const handleNoteChange = event => {
    event.stopPropagation();
    const { name, value } = event.target;
    if (name === 'task') {
      setState({ ...state, taskTitle: value });
    } else if (name === 'note') {
      setNote(value);
    }
  };

  const handleDateChange = event => {
    event.stopPropagation();
    console.log('date selected');
  };

  const list = anchor => (
    <Box>
      <Typography
        variant='h4'
        component='h3'
        style={{ margin: '80px 0 20px 0', textAlign: 'center' }}
      >
        Edit Task
      </Typography>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '30ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextField
            id='task'
            label={todo.task}
            onChange={handleTaskChange}
            value={todo.task}
          />
          <TextField
            id='note'
            label={todo.note ? todo.note : 'Add note'}
            multiline
            minRows={5}
            name='note'
            value={todo.note}
            onChange={handleNoteChange}
          />

          <Typography style={{ marginTop: 'auto', opacity: '0.8' }}>
            Created on{todo.dateCreated}
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box>
      <IconButton
        edge='end'
        aria-label='edit'
        onClick={toggleDrawer('right', true)}
      >
        <EditIcon />
      </IconButton>
      <Drawer
        anchor='right'
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </Box>
  );
}
