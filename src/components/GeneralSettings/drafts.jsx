import React from "react";
import { Select, MenuItem, TextField } from "@mui/material";

function Drafts(props) {
  return (
    <div style={{ width: "45%", margin: "auto" }}>
      <h3>What draft format do you use?</h3>
      <Select
        id="draftFormat"
        value={props.value.draftFormat}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            draftFormat: event.target.value,
          }));
        }}
        variant="filled"
        fullWidth
      >
        <MenuItem value={"Auction"}>Auction</MenuItem>
        <MenuItem value={"Snake Draft"}>Snake Draft</MenuItem>
      </Select>
      <h3>How do you determine draft order?</h3>
      <TextField
        id="setOrder"
        label="Set Draft Order"
        value={props.value.setOrder}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            setOrder: event.target.value,
          }));
        }}
        variant="filled"
        fullWidth
      />
      <h3>Multiple drafts a year? Explain those settings here</h3>
      <TextField
        id="multipleDrafts"
        label="Multiple Drafts"
        value={props.value.multipleDrafts}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            multipleDrafts: event.target.value,
          }));
        }}
        variant="filled"
        fullWidth
      />
    </div>
  );
}

export default Drafts;
