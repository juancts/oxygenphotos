import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import styles from "./Footer.module.css";
import { BsFillEnvelopeAtFill, BsLinkedin, BsInstagram } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";




function Footer() {

  const favorites = useSelector((state)=>state.favorites.favorites)
  const location = useLocation();
  const isFavoritesEmpty = !favorites || favorites.length === 0;
  console.log(favorites);
  console.log(location)



  return (
    <Box
      
      sx={{
        position: isFavoritesEmpty && location.pathname === "/favorites" ? "fixed" : "relative",
        flexGrow: 1,
        bottom: 0,
        width:"100%",
        padding: "10px 0px",
        color: "white",
        backgroundColor: "black",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          border: "solid white 1px",
        }}
      >
        <Typography>
          <a href="mailto:jotarodriguez@gmail.com">
            <BsFillEnvelopeAtFill /> jotarodriguez@gmail.com
          </a>
        </Typography>

        <Typography>
          <a href="https://www.linkedin.com/in/jjrodriguez81/">
            <BsLinkedin />
          </a>{" "}
          <a href="https://www.instagram.com/jeijeiok/">
            <BsInstagram />
          </a>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
