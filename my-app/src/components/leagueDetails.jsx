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
function LeagueDetails() {
  return (
    <Box>
      <FormControl>
        <InputLabel>Name of your League</InputLabel>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <InputLabel>Sports League</InputLabel>
        <Select>
          <MenuItem>NFL</MenuItem>
          <MenuItem>NBA</MenuItem>
          <MenuItem>NHL</MenuItem>
          <MenuItem>MLB</MenuItem>
          <MenuItem>NCAA Football</MenuItem>
        </Select>
        <InputLabel>Hosting Website</InputLabel>
        <Select>
          <MenuItem>ESPN</MenuItem>
          <MenuItem>Sleeper</MenuItem>
          <MenuItem>My Fantasy League</MenuItem>
          <MenuItem>FanTrax</MenuItem>
          <MenuItem>Yahoo</MenuItem>
          <MenuItem>FFPC</MenuItem>
          <MenuItem>CBS Sports</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
