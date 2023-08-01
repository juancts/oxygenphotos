import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { BsFillEnvelopeAtFill, BsLinkedin, BsInstagram } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";




function Footer() {

  const favorites = useSelector((state)=>state.favorites.favorites)
  const location = useLocation();
  const isFavoritesEmpty = !favorites || favorites.length === 0;
 
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap:"15px"
  };


  return (
    <Box
    
      sx={{
        position: isFavoritesEmpty && location.pathname !== "/home" && location.pathname !=="/about" ? "fixed" : "relative",
        flexGrow: 1,
        bottom: 0,
        width:"100%",
        padding: "30px 0px",
        color: "white",
        backgroundColor: "black",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          width:"80%",
          justifyContent: "space-between",
          borderTop: "solid white 1px",
          paddingTop:"5px",
          
        }}
      >
        <Box>
        <Typography>
          <a style={linkStyle} href="mailto:jotarodriguez@gmail.com">
          
            <BsFillEnvelopeAtFill />
            
           <Typography sx={{display:{ xs: "none", sm: "block"}}}>jotarodriguez@gmail.com
            </Typography> 
            
            
          </a>
          </Typography>

        </Box>
        <Box sx={{display: "flex", gap:"15px"}}>
        <Typography>
          <a style={linkStyle} href="https://www.linkedin.com/in/jjrodriguez81/">
            <BsLinkedin />
          </a>
        </Typography>

        <Typography>
          <a style={linkStyle} href="https://www.instagram.com/jeijeiok/">
            <BsInstagram />
          </a>
        </Typography>

        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
