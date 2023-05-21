import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem({ todo, removeItem, toggleItem }) {
  const labelId = `checkbox-list-label-${todo.id}`;
  /* this label id is there for accessibility */

  const removeTask = () => {
    removeItem(todo.id);
  };

  const toggleTask = () => {
    toggleItem(todo.id);
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge='end' aria-label='comments'>
          <DeleteIcon onClick={removeTask} />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge='start'
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
            onClick={toggleTask}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.task} />
      </ListItemButton>
    </ListItem>
  );
}

export default TodoItem;
