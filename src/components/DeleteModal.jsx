// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { useState } from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { IconButton } from '@mui/material';

// function DeleteModal() {
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <IconButton edge='end' aria-label='comments' onClick={removeTask}>
//         <DeleteIcon />
//       </IconButton>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby='alert-dialog-title'
//         aria-describedby='alert-dialog-description'
//       >
//         <DialogTitle id='alert-dialog-title'>
//           <h1>Delete Task</h1>
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id='alert-dialog-description'>
//             <h3>This task will be permanently deleted.</h3>
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleClose} autoFocus>
//             Confirm
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default DeleteModal;

// <IconButton edge='end' aria-label='comments' onClick={removeTask}>
//   <DeleteIcon />
// </IconButton>;
