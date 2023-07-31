import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, Button, List, ListItem, ListItemText, IconButton, Drawer } from "@mui/material";
//import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {GiHamburgerMenu} from "react-icons/gi";
import { NavLink } from "react-router-dom";

function NavBar() {

  
const [open, setOpen] = useState(false);


const toggleDrawer = (open) => (event) => {
  if (
    event &&
    event.type === "keydown" &&
    (event.key === "Tab" || event.key === "Shift")
  ) {
    return;
  }

  setOpen(open);
};

const list = () => (
  <Box
    sx={{height:"auto", width: "250px", color: "white", backgroundColor: "black" }}
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
    <List>
      <NavLink  to="/home" style={{ textDecoration: "none", color: "white" }}>
        <ListItem button>
          <ListItemText primary="Inicio" />
        </ListItem>
      </NavLink>
      <NavLink to="/favorites" style={{ textDecoration: "none", color: "white" }}>
        <ListItem button>
          <ListItemText primary="My photos" />
        </ListItem>
      </NavLink>
      <NavLink to="/about" style={{ textDecoration: "none", color: "white" }}>
        <ListItem button>
          <ListItemText primary="About" />
        </ListItem>
      </NavLink>
    </List>
  </Box>
);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "red" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GALLERY
          </Typography>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <GiHamburgerMenu/>
              
            </IconButton>
            <Drawer
            
               variant="temporary"
               PaperProps={{
                sx:{
                  height:"fit-content"
                }
               }}
              anchor="right"
              open={open}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <NavLink to="/home">
              <Button sx={{ color: "white" }}>Inicio</Button>
            </NavLink>
            <NavLink to="/favorites">
              <Button sx={{ color: "white" }}>My photos</Button>
            </NavLink>
            <NavLink to="/about">
              <Button sx={{ color: "white" }}>About</Button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );

}

export default NavBar;
