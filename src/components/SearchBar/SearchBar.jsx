import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchPhotos } from "../../features/photos/photosSlice";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(searchPhotos(search));
      navigate("/home");
    } catch (error) {
      throw new Error("ERROR EN SEARCH COMPONENT" + error.message);
    }
  };

  const handleOnchange = (e) => {
    const input = e.target.value;
    setSearch(input);
  };

  const handleResetSearch = () => {
    dispatch(searchPhotos([]));
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "black",
        textAlign: "center",
        padding: "100px",
      }}
    >
      {location.pathname !== "/favorites" ? (
        <Typography variant="h4" sx={{ color: "white" }}>
          OXYGEN PHOTO GALLERY
        </Typography>
      ) : (
        <Typography variant="h4" sx={{ color: "white" }}>
          MY PHOTOS
        </Typography>
      )}
      <Typography
        variant="h6"
        sx={{ color: "white", display: { xs: "none", md: "block" } }}
      >
        La fuente de imágenes de internet. Con recursos de creadores de todo el
        mundo.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "25px",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={handleOnchange}
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            width: { xs: "100%", md: "500px" },
            //height: "40px",

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
          }}
        />
        <Button variant="contained" onClick={onSubmit}>
          Search
        </Button>
        {search && (
          <Button variant="contained" onClick={handleResetSearch}>
            Clear
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default SearchBar;
