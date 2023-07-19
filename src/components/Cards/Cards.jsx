import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { useLocation } from "react-router-dom";
import styles from "./Cards.module.css";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import { Box, Grid, ImageListItem } from "@mui/material";
import Favorites from "../../views/Favorites/Favorites";

function Cards() {
  const photos = useSelector((photos) => photos.photos.allPhotos);
  const location = useLocation();

  
  return (
    <Box sx={{margin:"25px"}}>

    <div className={styles.container}>
      <div className={styles.sigant}>
        <i className={styles.icon}>
          <BsFillCaretLeftFill />
        </i>
      </div>

      <Grid
        
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {location.pathname !== "/favorites"
          ? photos.map((e, i) => (
              <Grid item xs={2} sm={4} md={4} key={i}>
                <ImageListItem>
                  <Card
                    id={e.id}
                    key={e.id}
                    index={i}
                    height={e.height}
                    width={e.width}
                    description={e.description}
                    photo={e.photo}
                    location={location}
                    
                  />
                </ImageListItem>
              </Grid>
            ))
          :            
            <Favorites />
            }
      </Grid>
      <div className={styles.sigant}>
        <i className={styles.icon}>
          <BsFillCaretRightFill />
        </i>
      </div>
    </div>
    </Box>
  );
}

export default Cards;
