import { Box, Button, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchDescription } from "../../features/photos/favoriteSlice";
// import { Link } from "react-router-dom";

function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const favorites = useSelector((state)=>state.favorites.favorites)
  
  
console.log("FAVORITES", favorites)
console.log("SEARCH", search)


  const handleSearch = () => {
    console.log(search);
    let searchedFavorites = [];
    let tosearch = search.toLowerCase();
    if(tosearch){
      searchedFavorites = favorites.filter((e)=>{
      const description = e.description || '';
      return description.toLowerCase().includes(tosearch)}
      )
    }else{
      searchedFavorites =[];
    }
    dispatch(searchDescription(searchedFavorites));

  };


  
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography>Search Description</Typography>
      <Input onChange={handleChange} sx={{ width: "300px" }} type="" />
     {/* <Link to="/favoritessearch"> */}
     <Button onClick={handleSearch} variant="contained">
        Search
      </Button>
      {/* </Link>  */}
    </Box>
  );
}

export default Search;
