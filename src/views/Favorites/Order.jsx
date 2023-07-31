import { Box, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderFavorites } from "../../features/photos/favoriteSlice";

function Order() {
  const dispatch = useDispatch();
  const [type, setType] = useState("Options");

  console.log("TYPE", type)


  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setType(selectedValue);
    console.log(type);
    dispatch(orderFavorites(selectedValue));
  };
 
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography>Order By</Typography>
      <Select
        value={type} 
        onChange={handleChange}
        sx={{ width: "300px" }}
        id=""
      > 
      <MenuItem value="Options">Options</MenuItem>
        <MenuItem value="Width">Width</MenuItem>
        <MenuItem value="Height">Height</MenuItem>
        <MenuItem value="Likes">Likes</MenuItem>
        <MenuItem value="Added">Date added</MenuItem>
      </Select>
    </Box>
  );
}

export default Order;
