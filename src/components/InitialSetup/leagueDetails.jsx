import React from "react";
import { Select, MenuItem, TextField } from "@mui/material";
// return league name/ sport/ league/ league type
function LeagueDetails(props) {
  // setValues(prevValues => ({...prevValues, thisValue: event.target.value }))
  // }
  return (
    <div style={{ width: "45%", margin: "auto" }}>
      <h3>What is your League Name?</h3>
      <TextField
        id="leagueName"
        value={props.value.leagueName}
        label="League Name"
        variant="filled"
        fullWidth
      />

      <h3>Select a Sport</h3>
      <Select
        id="sport"
        variant="filled"
        label="Sport"
        fullWidth
        value={props.value.sport}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            sport: event.target.value,
          }));
        }}
      >
        <MenuItem value={"NFL"}>NFL</MenuItem>
        <MenuItem value={"NBA"}>NBA</MenuItem>
        <MenuItem value={"NHL"}>NHL</MenuItem>
        <MenuItem value={"MLB"}>MLB</MenuItem>
        <MenuItem value={"NCAA Football"}>NCAA Football</MenuItem>
      </Select>

      <h3>What Website is your leauge using?</h3>
      <Select
        id="hostSite"
        variant="filled"
        label="Host Site"
        fullWidth
        value={props.value.website}
      >
        <MenuItem value={"ESPN"}>ESPN</MenuItem>
        <MenuItem value={"Sleeper"}>Sleeper</MenuItem>
        <MenuItem value={"My Fantasy League"}>My Fantasy League</MenuItem>
        <MenuItem value={"FanTrax"}>FanTrax</MenuItem>
        <MenuItem value={"Yahoo"}>Yahoo!</MenuItem>
        <MenuItem value={"FFPC"}>FFPC</MenuItem>
        <MenuItem value={"CBS Sports"}>CBS Sports</MenuItem>
        <MenuItem value={"FanDuel"}>FanDuel</MenuItem>
        <MenuItem value={"DraftKings"}>DraftKings</MenuItem>
        <MenuItem value={"FFPC"}>FFPC</MenuItem>
        <MenuItem value={"Other"}>Other</MenuItem>
      </Select>
    </div>
  );
}

export default LeagueDetails;
