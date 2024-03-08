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
    <Box>
      <FormControl>
        <InputLabel>Name of your League</InputLabel>
        <TextField id="outlined-basic" label="" variant="outlined" />
        <InputLabel>Sports League</InputLabel>
        <Select
          labelId="Sport"
          id="Sport"
          label="Sport"
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
        <InputLabel>Hosting Website</InputLabel>
        <Select
          labelId="HostSite"
          id="HostSite"
          value={props.value.website}
          label="Host"
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
      </FormControl>
    </Box>
  );
}

export default LeagueDetails;
