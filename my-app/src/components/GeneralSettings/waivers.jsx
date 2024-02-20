import React from "react";
import {
  FormControl,
  Select,
  Box,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

function Waivers() {
  return (
    <Box>
      <FormControl>
        <label>Waiver Settings</label>
        <Select>
          <MenuItem value={"FCFS"}>First Come First Serve</MenuItem>
          <MenuItem value={"FAAB"}>
            Free Agent Aquisition Budget Waivers
          </MenuItem>
          <MenuItem value={"Continual"}>
            Continual Rolling List Waivers
          </MenuItem>
        </Select>
        <label>Explain any special waiver settings</label>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </Box>
  );
}

export default Waivers;
