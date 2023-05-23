import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Checkbox,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

function TodoItem({ todo, removeItem, toggleItem, editItem }) {
  const labelId = `checkbox-list-label-${todo.id}`;
  const [openDialog, setOpenDialog] = useState(false);

  // const removeTask = () => {
  //   removeItem(todo.id);
  // };

  const removeTask = () => {
    setOpenDialog(true);
  };

  const handleDeleteConfirmation = () => {
    setOpenDialog(false);
    removeItem(todo);
  };

  const toggleTask = () => {
    toggleItem(todo.id);
  };

  const editTask = () => {
    editItem(todo.id);
  };

  return (
    <ListItem disablePadding>
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge='start'
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
            onChange={toggleTask}
          />
        </ListItemIcon>
        <ListItemText
          id={labelId}
          primary={todo.task}
          style={{ textDecoration: todo.completed && 'line-through' }}
          sx={{ color: 'blue' }}
        />
      </ListItemButton>
      <IconButton edge='end' aria-label='edit' onClick={editTask}>
        <EditIcon />
      </IconButton>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            "{todo.task}" will be permantently deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirmation} color='error' autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <IconButton edge='end' aria-label='comments' onClick={removeTask}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}

export default TodoItem;
