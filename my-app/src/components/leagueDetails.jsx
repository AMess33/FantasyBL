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
        <InputLabel></InputLabel>
        <TextField></TextField>
        <InputLabel></InputLabel>
        <Select>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
