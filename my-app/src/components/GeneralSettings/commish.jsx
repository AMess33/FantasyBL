import React from "react";
import { FormControl, TextField, Box, Label } from "@mui/material";

function Commish() {
  return (
    <Box>
      <FormControl>
        <Label>Commisioner's best intrest clause?</Label>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </Box>
  );
}

export default Commish;
