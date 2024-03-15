import React from "react";
import { FormControl, Box, TextField } from "@mui/material";

function Standings(props) {
  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ width: "33%" }}>
          <h3>How are Standings determined?</h3>
          <TextField id="standings" variant="filled" />
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ width: "33%" }}>
          <h3>Is tanking allowed?</h3>
          <TextField id="tanking" variant="filled" />
        </FormControl>
      </Box>
    </div>
  );
}

export default Standings;
