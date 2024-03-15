import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { red } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#0f0" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function GridLayout() {
  return (
    <div >
      <Box sx={{ flexGrow: 1,mt:1}}>
        <Grid container spacing={3} xs={{mt:2}}>
          <Grid item xs={4}  >
            <Item sx={{backgroundColor:'red',color:'white'}}>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item  sx={{backgroundColor:'green',color:'white'}}>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item  sx={{backgroundColor:'red',color:'white'}}>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item  sx={{backgroundColor:'blue',color:'white'}}>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default GridLayout;
