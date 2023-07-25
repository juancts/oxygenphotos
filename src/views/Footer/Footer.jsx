import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import style from "./Footer.module.css"

import { BsFillEnvelopeAtFill, BsLinkedin, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <Box classname={style.container} sx={{ backgroundColor: "black", color: "white", padding:"3%" }}>
      <Container sx={{padding:"5%", display:"flex", flexDirection:"row", justifyContent:"space-between", borderTop:"solid white 1px"}}>
        <div>
                    
            
        <Typography><a href="mailto:jotarodriguez@gmail.com"><BsFillEnvelopeAtFill/> jotarodriguez@gmail.com</a></Typography>

        </div>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <Typography><a href="https://www.linkedin.com/in/jjrodriguez81/"><BsLinkedin /></a> <a href="https://www.instagram.com/jeijeiok/"><BsInstagram /></a></Typography>

        </div>
            
          
        
      </Container>
    </Box>

    // <div style={{borderTop: "1px solid"}}>
    //   <div style={{display: 'flex', flexDirection: "row", justifyContent:"space-between", marginTop: "20px"}}>
    //       <BsFillEnvelopeAtFill />
    //       <BsLinkedin />
    //       <BsInstagram />
    //   </div>

    // </div>
  );
}

export default Footer;
