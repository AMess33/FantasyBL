import React from "react";
import { FormControl, TextField, Box, label } from "@mui/material";

function Commish() {
  return (
    <Box>
      <FormControl>
        <label>Commisioner's best intrest clause?</label>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </Box>
  );
}

export default Commish;
