import React from "react";
import {
  FormControl,
  Select,
  Box,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
// return league name/ sport/ league/ league type
function LeagueDetails(props) {
  // setValues(prevValues => ({...prevValues, thisValue: event.target.value }))
  // }
  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ width: "33%" }}>
          <h3>What is your League Name?</h3>
          <TextField
            id="leagueName"
            value={props.value.leagueName}
            label="League Name"
            variant="filled"
          />
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ width: "33%" }}>
          <h3>Select a Sport</h3>
          <Select
            id="sport"
            variant="filled"
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
        </FormControl>
      </Box>
      <Box>
        <FormControl sx={{ width: "33%" }}>
          <h3>What Website is your leauge using?</h3>
          <Select id="hostSite" variant="filled" value={props.value.website}>
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
        </FormControl>
      </Box>
    </div>
  );
}

export default LeagueDetails;
