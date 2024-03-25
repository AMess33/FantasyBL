import React from "react";
import { Select, MenuItem, TextField } from "@mui/material";

function Trades(props) {
  return (
    <div style={{ width: "55%", margin: "auto" }}>
      <h3>What is able to be traded in your league?</h3>
      <TextField
        id="tradeAsset"
        label="Tradeable Assets"
        value={props.value.tradeAsset}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            tradeAsset: event.target.value,
          }));
        }}
        variant="filled"
        fullWidth
        multiline
      />
      <h3>Does your league allow trade vetos?</h3>
      <Select
        id="veto"
        value={props.value.veto}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            veto: event.target.value,
          }));
        }}
        variant="filled"
        fullWidth
      >
        <MenuItem value={"NoVeto"}>No Trade Vetos</MenuItem>
        <MenuItem value={"Yes"}>Allow Trade Vetos</MenuItem>
      </Select>
      <h3>Trade Colusion Clause</h3>
      <TextField
        id="colusion"
        label="Colusion"
        value={props.value.colusion}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            colusion: event.target.value,
          }));
        }}
        variant="filled"
        fullWidth
        multiline
      ></TextField>
    </div>
  );
}

export default Trades;
