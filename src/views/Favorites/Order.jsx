import { Box, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { orderFavorites } from "../../features/photos/favoriteSlice";

function Order() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const type = e.target.value;
    console.log(type);
    dispatch(orderFavorites(type));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography>Order By</Typography>
      <Select
        onChange={handleChange}
        sx={{ width: "300px" }}
        name="width"
        id=""
      >
        <MenuItem value="width">width</MenuItem>
        <MenuItem value="height">Height</MenuItem>
        <MenuItem value="likes">Likes</MenuItem>
        <MenuItem value="added">Date added</MenuItem>
      </Select>
    </Box>
  );
}

export default Order;
