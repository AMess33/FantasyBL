import React from "react";
import { FormControl, Box, TextField } from "@mui/material";

function OwnerExpectations(props) {
  return (
    <Box>
      <FormControl>
        <h3>Owner Expectations</h3>
        <TextField id="outlined-basic" variant="filled" />
      </FormControl>
    </Box>
  );
}

export default OwnerExpectations;
