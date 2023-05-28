import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './RightDrawer.css';

export default function RightDrawer({ todo, editItem }) {
  const [state, setState] = useState({
    right: false,
    taskTitle: todo.task,
    taskDescription: '',
  });

  const [selectedDate, setSelectedDate] = useState(null);

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

  const handleEditChange = event => {
    event.stopPropagation();
    const updatedTask = { ...todo, task: event.target.value };
    editItem(updatedTask);
  };

  const handleInputChange = event => {
    event.stopPropagation();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    setState({
      ...state,
      taskTitle: '',
      taskDescription: '',
      right: false,
    });
  };

  const list = anchor => (
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
        <TextField id='task' label={todo.task} onChange={handleEditChange} />
        <TextField id='note' label='Add note' multiline minRows={5} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label='Add a due date'
            value={selectedDate}
            onChange={newValue => setSelectedDate(newValue)}
            slotProps={{ textField: { variant: 'outlined' } }}
          />
        </LocalizationProvider>
        <Typography style={{ marginTop: 'auto', opacity: '0.8' }}>
          Created on {todo.time}
        </Typography>
      </div>
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
