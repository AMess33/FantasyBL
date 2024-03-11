import React from "react";
import { FormControl, Box, InputLabel, TextField } from "@mui/material";

function OwnerExpectations(props) {
  return (
    <Box>
      <FormControl>
        <InputLabel>Owner Expectations</InputLabel>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </Box>
  );
}

export default OwnerExpectations;
