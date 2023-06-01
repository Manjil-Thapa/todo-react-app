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
import ShowInfoDrawer from './ShowInfoDrawer';

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
  const [showInfoDrawer, setShowInfoDrawer] = useState(false);

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

  const handleShowInfo = () => {
    console.log('showing item');
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
            onClick={handleShowInfo}
          />
        </ListItemButton>
        <h4 style={{ color: 'gray', fontSize: '10px' }}>{todo.time}</h4>
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
      <Typography>Due: 28 Jun 2023</Typography>
    </>
  );
}
