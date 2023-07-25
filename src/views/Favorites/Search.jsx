import { Box, Button, Input, Typography } from '@mui/material'
import React from 'react'

function Search() {
  return (
    <Box sx={{display:"flex", flexDirection:"column"}}>
    <Typography>Search Description</Typography>
    <Input sx={{width:"300px"}} type="" />
    <Button variant="contained" >Search</Button>
    </Box>
  )
}

export default Search