import React from "react";
import { FormControl, Select, Box, MenuItem } from "@mui/material";

function LeagueType(props) {
  return (
    <div>
      <Box>
        <FormControl sx={{ width: "33%" }}>
          <h3>What Type of Fantasy Contest</h3>
          <Select>
            <MenuItem value={"Redraft"}>Seasonal Redraft</MenuItem>
            <MenuItem value={"Dynasty"}>Dynasty</MenuItem>
            <MenuItem value={"Keeper"}>Keeper</MenuItem>
            <MenuItem value={"Playoff"}>Playoff Contest</MenuItem>
            <MenuItem value={"Weekly"}>Weekly Contest</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <FormControl sx={{ width: "33%" }}>
          <h3>Special League Type</h3>
          <Select>
            <MenuItem value={"Devy"}>Devy</MenuItem>
            <MenuItem value={"Empire"}>Empire</MenuItem>
            <MenuItem value={"Contract"}>Contract</MenuItem>
            <MenuItem value={"BestBall"}>BestBall</MenuItem>
            <MenuItem value={"Guillotine"}>Guillotine</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default LeagueType;
