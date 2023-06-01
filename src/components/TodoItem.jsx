import {
  Button,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Checkbox,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useState } from 'react';
import EditDrawer from './EditDrawer';

export default function TodoItem({
  todo,
  removeItem,
  editItem,
  toggleCheck,
  toggleImportance,
}) {
  const labelId = `checkbox-list-label-${todo.id}`;
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openShowDialog, setOpenShowDialog] = useState(false);

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

  const handleImportance = () => {
    toggleImportance(todo.id);
  };

  const toggleEditDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const toggleInfoDialog = () => {
    setOpenShowDialog(true);
  };

  return (
    <>
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
            onClick={toggleInfoDialog}
          />
        </ListItemButton>

        <Typography style={{ color: 'gray', fontSize: '10px' }}>
          {todo.time}
        </Typography>

        <Dialog open={openShowDialog} onClose={() => setOpenShowDialog(false)}>
          <DialogTitle>Task Information</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              <Typography variant='h5' component='h3'>
                Title: {todo.task}
              </Typography>
              <Typography variant='h6' component='h3'>
                Description: {todo.note ? todo.note : ''}
              </Typography>
              <Typography variant='h6' component='h3'>
                Due date: {todo.due ? todo.due : ''}
              </Typography>
              <Typography variant='h6' component='h3'>
                Project list: Work in progress
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenShowDialog(false)}>Cancel</Button>
          </DialogActions>
        </Dialog>

        <EditDrawer
          open={openDrawer}
          toggleDrawer={toggleEditDrawer}
          todo={todo}
          editItem={editItem}
          toggleImportance={toggleImportance}
        />

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
      <Typography>{todo.dateCreated}</Typography>
    </>
  );
}
