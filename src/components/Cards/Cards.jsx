import React from "react";

import Card from "../Card/Card";
import { useLocation } from "react-router-dom";
import styles from "./Cards.module.css";
import { Box, ImageList } from "@mui/material";
import Favorites from "../../views/Favorites/Favorites";

function Cards({ photos }) {
  const location = useLocation();

  return (
    <Box sx={{ margin: "25px" }}>
      <div className={styles.container}>
        {location.pathname !== "/favorites" ? (
          <ImageList
            variant="masonry"
            sx={{
              columnCount: {
                xs: "1 !important",
                sm: "2 !important",
                md: "3 !important",
                lg: "4 !important",
                xl: "5 !important",
              },
            }}
            gap={8}
          >
            {photos.map((e, i) => (
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
            ))}
          </ImageList>
        ) : (
          <Favorites />
        )}
       
      </div>
    </Box>
  );
}

export default Cards;
