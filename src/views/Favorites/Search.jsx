import { Box, Button, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchDescription } from "../../features/photos/favoriteSlice";
import { Link } from "react-router-dom";

function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    console.log(search);
    dispatch(searchDescription(search));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography>Search Description</Typography>
      <Input onChange={handleChange} sx={{ width: "300px" }} type="" />
     <Link to="/favoritessearch">
     <Button onClick={handleSearch} variant="contained">
        Search
      </Button>
      </Link> 
    </Box>
  );
}

export default Search;
