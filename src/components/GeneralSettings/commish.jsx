import React from "react";
import { FormControl, TextField, Box } from "@mui/material";

function Commish(props) {
  return (
    <Box>
      <FormControl>
        <h3>Commisioner's best intrest clause?</h3>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </Box>
  );
}

export default Commish;
