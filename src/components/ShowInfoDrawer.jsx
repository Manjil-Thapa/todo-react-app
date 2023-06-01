import React, { useEffect, useState } from 'react';
import { TextField, Typography, IconButton, Box, Drawer } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './RightDrawer.css';

export default function ShowInfoDrawer({ todo }) {
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

  const list = anchor => (
    <>
      <Typography
        variant='h4'
        component='h3'
        style={{ margin: '80px 0 20px 0', textAlign: 'center' }}
      >
        Edit Taskdsa
      </Typography>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '30ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            paddingTop: '100px',
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
        </div>
      </Box>
    </>
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
