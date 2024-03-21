import React from "react";
import { Select, MenuItem, TextField } from "@mui/material";

function Waivers(props) {
  return (
    <div style={{ width: "45%", margin: "auto" }}>
      <h3>Waiver Settings</h3>
      <Select
        id="waiver"
        value={props.value.waiver}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            waiver: event.target.value,
          }));
        }}
        variant="filled"
        fullWidth
      >
        <MenuItem value={"FCFS"}>First Come First Serve</MenuItem>
        <MenuItem value={"FAAB"}>Free Agent Aquisition Budget Waivers</MenuItem>
        <MenuItem value={"Continual"}>Continual Rolling List Waivers</MenuItem>
      </Select>
      <h3>Explain any special waiver settings</h3>
      <TextField
        id="specialWaiver"
        label="Special Waiver Settings"
        value={props.value.specialWaiver}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            specialWaiver: event.target.value,
          }));
        }}
        variant="filled"
        fullWidth
        multiline
      />
    </div>
  );
}

export default Waivers;
