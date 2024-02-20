import React from "react";
import {
  FormControl,
  Select,
  Box,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

function Standings() {
  return (
    <Box>
      <FormControl>
        <label>How are your standings determined?</label>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <label>Is tanking allowed</label>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </Box>
  );
}

export default Standings;
