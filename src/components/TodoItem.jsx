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
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useState } from 'react';
import RightDrawer from './RightDrawer';

export default function TodoItem({
  todo,
  removeItem,
  editItem,
  toggleCheck,
  toggleImportance,
}) {
  const labelId = `checkbox-list-label-${todo.id}`;
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleCheck = () => {
    toggleCheck(todo.id);
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

  const handleImportance = () => {
    toggleImportance(todo.id);
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
            onChange={handleCheck}
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
      <Checkbox
        icon={<StarOutlineIcon />}
        checkedIcon={<StarIcon style={{ color: 'gold' }} />}
        checked={todo.isImportant}
        onChange={handleImportance}
      />
    </ListItem>
  );
}
