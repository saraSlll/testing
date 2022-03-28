import { useRef, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import React from 'react';
export default function AddPost(props) {
  const { setPosts  , userId } = props
  const [open, setOpen] = useState(false);
  const [title , setTitle] = useState('')
  const [body , setBody] = useState('')
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function changeTitle(e)
  {
      setTitle(e.target.value);
  }
  function changeBody(e)
  {
    setBody(e.target.value)
  }
  function add() {
    debugger
    console.log("T" , title , "B" , body)
    let newPost = {userId: userId, title: title, body: body }
     setPosts(newPost)
    handleClose()
  }
  return (<>
  
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create post
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Button autoFocus color="inherit" onClick={add}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="title"
              type="text"
              fullWidth
              variant="standard"
              onChange={changeTitle}
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <TextField
              style={{ width: '100%' }}
              id="outlined-multiline-flexible"
              label="body"
              multiline
              maxRows={5}
              onChange={changeBody}


            />

          </ListItem>
        </List>
      </Dialog>
    </div>
  </>)
}