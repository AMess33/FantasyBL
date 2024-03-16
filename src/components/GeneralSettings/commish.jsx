import React from "react";
import { FormControl, TextField, Box } from "@mui/material";

function Commish(props) {
  return (
    <Box>
      <FormControl>
        <h3>Commisioner's best intrest clause?</h3>
        <TextField
          id="commishClause"
          value={props.value.commishClause}
          variant="filled"
        />
      </FormControl>
    </Box>
  );
}

export default Commish;
