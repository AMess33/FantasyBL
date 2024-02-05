import React from "react";
import {
  FormControl,
  Select,
  Box,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

function LeagueType() {
  return (
    <Box>
      <FormControl>
        <InputLabel>What Type of Fantasy Contest</InputLabel>
        <Select>
          <MenuItem>Seasonal Redraft</MenuItem>
          <MenuItem>Dynasty</MenuItem>
          <MenuItem>Keeper</MenuItem>
          <MenuItem>Playoff Contest</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
