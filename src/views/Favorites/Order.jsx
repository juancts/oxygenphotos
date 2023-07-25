import { Box, MenuItem, Select, Typography } from "@mui/material";
import React from "react";

function Order() {
  return (
    <Box  sx={{display:"flex", flexDirection:"column"}}>
    <Typography>Order By</Typography>
      <Select sx={{width:"300px"}} name="width" id="">
        <MenuItem value="width">width</MenuItem>
        <MenuItem value="heigth">
          Heigth
        </MenuItem>
        <MenuItem value="likes">
          Likes
        </MenuItem>
        <MenuItem value="date">
          Date added
        </MenuItem>
      </Select>
    </Box>
  );
}

export default Order;
