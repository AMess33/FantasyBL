import React from "react";
import {
  FormControl,
  Select,
  Box,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

function Trades(props) {
  return (
    <Box>
      <FormControl>
        <InputLabel>What is able to be traded in your league?</InputLabel>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <InputLabel>Does your league allow trade vetos?</InputLabel>
        <Select>
          <MenuItem value={"NoVeto"}>No Trade Vetos</MenuItem>
          <MenuItem value={"Yes"}>Allow Trade Vetos</MenuItem>
        </Select>
        <InputLabel>Trade Colusion Settings</InputLabel>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        ></TextField>
        <InputLabel>What do you do if Colusion is suspected?</InputLabel>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </Box>
  );
}

export default Trades;
