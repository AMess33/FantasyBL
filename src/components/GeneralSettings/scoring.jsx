import React from "react";
import { FormControl, Box, InputLabel, TextField } from "@mui/material";

function Scoring(props) {
  return (
    <Box>
      <FormControl>
        <h5>
          Do you have any special scoring settings? If not, tell your league
          where to find the host sites posting of scoring settings
        </h5>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </Box>
  );
}

export default Scoring;
