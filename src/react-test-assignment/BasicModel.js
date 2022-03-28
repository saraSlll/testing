import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Posts from './posts';
import AddPost from './addPost';
const style = {
  position: 'absolute' ,
  top: '120%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  display: 'inline-block',
  margin:'auto',
  verticalalign: 'middle',
  p: 4,

};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {user} = props;
  return (
    <div>
      <Button variant="outlined"  onClick={handleOpen}>read posts from this user</Button>
      <Modal disableEnforceFocus 
          style={{display:'flex',alignItems:'center',justifyContent:'center' , overflow:'scroll'
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" >
 <br></br>
          Author : {user.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div>     
            <Posts userId = {user.id}></Posts>
</div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

