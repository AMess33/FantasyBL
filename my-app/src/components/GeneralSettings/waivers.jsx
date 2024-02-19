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
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </Box>
  );
}

export default Waivers;
