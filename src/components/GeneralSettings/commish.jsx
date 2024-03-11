import React from "react";
import { FormControl, TextField, Box, InputLabel } from "@mui/material";

function Commish(props) {
  return (
    <Box>
      <FormControl>
        <InputLabel>Commisioner's best intrest clause?</InputLabel>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </Box>
  );
}

export default Commish;
