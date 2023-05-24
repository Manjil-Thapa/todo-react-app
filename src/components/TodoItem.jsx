import {
  Button,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import Important from './Important';

export default function TodoItem({ todo, removeItem, toggleItem, editItem }) {
  const labelId = `checkbox-list-label-${todo.id}`;
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const toggleTask = () => {
    toggleItem(todo.id);
  };

  const removeTask = () => {
    setOpenDeleteDialog(true);
  };

  const handleDeleteConfirmation = () => {
    removeItem(todo.id);
    setOpenDeleteDialog(false);
  };

  const editTask = () => {
    setOpenEditDialog(true);
  };
  const handleEditConfirmation = () => {
    setOpenEditDialog(false);
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
      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {todo.task}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)}>Cancel</Button>
          <Button onClick={handleEditConfirmation} color='primary'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <IconButton edge='end' aria-label='edit' onClick={editTask}>
        <EditIcon />
      </IconButton>
      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            "{todo.task}" will be permanently deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirmation} color='error' autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <IconButton edge='end' aria-label='comments' onClick={removeTask}>
        <DeleteIcon />
      </IconButton>
      <Important />
    </ListItem>
  );
}
