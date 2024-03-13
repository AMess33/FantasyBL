import React from "react";
import { FormControl, Select, Box, MenuItem, TextField } from "@mui/material";

function Trades(props) {
  return (
    <Box>
      <FormControl>
        <h3>What is able to be traded in your league?</h3>
        <TextField id="outlined-basic" variant="filled" />
        <h3>Does your league allow trade vetos?</h3>
        <Select>
          <MenuItem value={"NoVeto"}>No Trade Vetos</MenuItem>
          <MenuItem value={"Yes"}>Allow Trade Vetos</MenuItem>
        </Select>
        <h3>Trade Colusion Settings</h3>
        <TextField id="outlined-basic" variant="filled"></TextField>
        <h3>What do you do if Colusion is suspected?</h3>
        <TextField id="outlined-basic" variant="filled" />
      </FormControl>
    </Box>
  );
}

export default Trades;
