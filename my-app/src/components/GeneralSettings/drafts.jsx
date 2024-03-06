import React from "react";
import {
  FormControl,
  Select,
  Box,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

function Drafts() {
  return (
    <Box>
      <FormControl>
        <InputLabel>What draft format do you use?</InputLabel>
        <Select>
          <MenuItem value={"Auction"}>Auction</MenuItem>
          <MenuItem value={"Snake Draft"}>Snake Draft</MenuItem>
        </Select>
        <InputLabel>How do you determine draft order?</InputLabel>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <InputLabel>
          Multiple drafts a year? Explain those settings here
        </InputLabel>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </Box>
  );
}

export default Drafts;
