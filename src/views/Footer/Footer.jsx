import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import styles from "./Footer.module.css";
import { BsFillEnvelopeAtFill, BsLinkedin, BsInstagram } from "react-icons/bs";
import { useSelector } from "react-redux";

function Footer() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "5%",
        bottom: 0,
        color: "white",
        backgroundColor: "black",
      }}
    >
      <Container
        sx={{
          display: "flex",
          padding: "5%",
          flexDirection: "row",
          justifyContent: "space-between",
          borderTop: "solid white 1px",
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
