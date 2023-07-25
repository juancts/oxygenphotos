import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import { BsFillEnvelopeAtFill, BsLinkedin, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "black", color: "white", padding:"3%" }}>
      <Container sx={{padding:"5%", display:"flex", flexDirection:"row", justifyContent:"space-between", borderTop:"solid white 1px"}}>
        <div>
                    
            
        <Typography><p><BsFillEnvelopeAtFill/> jotarodriguez@gmail.com</p></Typography>

        </div>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <Typography><BsLinkedin /> <BsInstagram /></Typography>

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
