import React from "react";
import { Select, MenuItem, Checkbox, ListItemText } from "@mui/material";

function LeagueType(props) {
  const types = ["Devy", "Empire", "Contract", "Bestball", "Guillotine"];

  return (
    <div style={{ width: "45%", margin: "auto" }}>
      <h3>What Type of Fantasy Contest</h3>
      <Select
        id="leagueType"
        variant="filled"
        fullWidth
        value={props.value.LeagueType}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            LeagueType: event.target.value,
          }));
        }}
      >
        <MenuItem value={"Redraft"}>Seasonal Redraft</MenuItem>
        <MenuItem value={"Dynasty"}>Dynasty</MenuItem>
        <MenuItem value={"Keeper"}>Keeper</MenuItem>
        <MenuItem value={"Playoff"}>Playoff Contest</MenuItem>
        <MenuItem value={"Weekly"}>Weekly Contest</MenuItem>
      </Select>
      <h3>Special League Type</h3>
      <Select
        id="specialLeagueType"
        value={props.value.specialLeagueType}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            specialLeagueType: event.target.value,
          }));
        }}
        variant="filled"
        fullWidth
        renderValue={(selected) => selected.join(", ")}
      >
        {types.map((type) => (
          <MenuItem key={type} value={type}>
            <Checkbox checked={props.value(type).indexOf(type) > -1} />
            <ListItemText primary={type} />
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default LeagueType;
