import React from "react";
import { FormControl, Select, Box, MenuItem, TextField } from "@mui/material";

function Trades(props) {
  return (
    <Box>
      <FormControl>
        <h3>What is able to be traded in your league?</h3>
        <TextField
          id="tradeAsset"
          value={props.value.tradeAsset}
          variant="filled"
        />
        <h3>Does your league allow trade vetos?</h3>
        <Select id="veto" value={props.value.veto} variant="filled">
          <MenuItem value={"NoVeto"}>No Trade Vetos</MenuItem>
          <MenuItem value={"Yes"}>Allow Trade Vetos</MenuItem>
        </Select>
        <h3>Trade Colusion Settings</h3>
        <TextField
          id="colusion"
          value={props.value.colusion}
          variant="filled"
        ></TextField>
        <h3>What do you do if Colusion is suspected?</h3>
        <TextField
          id="handleColusion"
          value={props.value.handleColusion}
          variant="filled"
        />
      </FormControl>
    </Box>
  );
}

export default Trades;
