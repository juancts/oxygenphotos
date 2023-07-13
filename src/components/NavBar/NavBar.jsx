import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    
      <Box sx={{ flexGrow: 1 }}>
        <AppBar  position="static" sx={{backgroundColor: "red"}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              GALLERY
            </Typography>
            <NavLink to="/home"><Button sx={{color:"white"}}>Inicio</Button></NavLink>
            <NavLink to="/favorites"><Button sx={{color:"white"}}>My photos</Button></NavLink>
            <NavLink to="/about"><Button sx={{color:"white"}}>About</Button></NavLink>
            
          </Toolbar>
        </AppBar>
      </Box>
    
  );
}

export default NavBar;
