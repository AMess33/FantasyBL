import React from "react";
import {
  FormControl,
  Select,
  Box,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

function Scoring() {
  return (
    <Box>
      <FormControl>
        <InputLabel>
          Do you have any special scoring settings? If not, tell your league
          where to find the host sites posting of scoring settings
        </InputLabel>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </Box>
  );
}

export default Scoring;
