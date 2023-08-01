import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchDescription } from "../../features/photos/favoriteSlice";
// import { Link } from "react-router-dom";

function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleSearch = () => {
    let searchedFavorites = [];
    let tosearch = search.toLowerCase();
    if (tosearch) {
      searchedFavorites = favorites.filter((e) => {
        const description = e.description || "";
        return description.toLowerCase().includes(tosearch);
      });
    } else {
      searchedFavorites = [];
    }
    dispatch(searchDescription(searchedFavorites));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Typography>Search Description</Typography>
      <TextField
        placeholder="Search description"
        variant="outlined"
        onChange={handleChange}
        sx={{ width: "300px" }}
        type=""
      />
      {/* <Link to="/favoritessearch"> */}
      <Box sx={{ textAlign: "right", marginTop: "5px" }}>
        <Button
          onClick={handleSearch}
          sx={{ width: "150px" }}
          variant="contained"
        >
          Search
        </Button>
      </Box>
      {/* </Link>  */}
    </Box>
  );
}

export default Search;
