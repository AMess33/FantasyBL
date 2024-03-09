import React from "react";
import {
  FormControl,
  Select,
  Box,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

function Waivers(props) {
  return (
    <Box>
      <FormControl>
        <h3>Waiver Settings</h3>
        <Select>
          <MenuItem value={"FCFS"}>First Come First Serve</MenuItem>
          <MenuItem value={"FAAB"}>
            Free Agent Aquisition Budget Waivers
          </MenuItem>
          <MenuItem value={"Continual"}>
            Continual Rolling List Waivers
          </MenuItem>
        </Select>
        <h3>Explain any special waiver settings</h3>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </Box>
  );
}

export default Waivers;
