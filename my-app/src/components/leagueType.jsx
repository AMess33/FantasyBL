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
          <MenuItem value={"Redraft"}>Seasonal Redraft</MenuItem>
          <MenuItem value={"Dynasty"}>Dynasty</MenuItem>
          <MenuItem value={"Keeper"}>Keeper</MenuItem>
          <MenuItem value={"Playoff"}>Playoff Contest</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
