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
        <InputLabel>How are your standings determined?</InputLabel>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <InputLabel>Is tanking allowed</InputLabel>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </Box>
  );
}

export default Standings;
