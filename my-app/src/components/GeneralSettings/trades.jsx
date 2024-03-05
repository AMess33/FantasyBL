import React from "react";
import {
  FormControl,
  Select,
  Box,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

function Trades() {
  return (
    <Box>
      <FormControl>
        <label>What is able to be traded in your league?</label>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <InputLabel>Does your league allow trade vetos?</InputLabel>
        <Select>
          <MenuItem value={"NoVeto"}>No Trade Vetos</MenuItem>
          <MenuItem value={"Yes"}>Allow Trade Vetos</MenuItem>
        </Select>
        <label>Trade Colusion Settings</label>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        ></TextField>
        <label>What do you do if Colusion is suspected?</label>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </Box>
  );
}

export default Trades;
