import React from "react";
import { FormControl, Select, Box, MenuItem, TextField } from "@mui/material";

function Waivers(props) {
  return (
    <Box>
      <FormControl>
        <h3>Waiver Settings</h3>
        <Select id="waiver" variant="filled">
          <MenuItem value={"FCFS"}>First Come First Serve</MenuItem>
          <MenuItem value={"FAAB"}>
            Free Agent Aquisition Budget Waivers
          </MenuItem>
          <MenuItem value={"Continual"}>
            Continual Rolling List Waivers
          </MenuItem>
        </Select>
        <h3>Explain any special waiver settings</h3>
        <TextField id="specialWaiver" variant="filled" />
      </FormControl>
    </Box>
  );
}

export default Waivers;
