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
        <label>What draft format do you use?</label>
        <Select>
          <MenuItem value={"Auction"}>Auction</MenuItem>
          <MenuItem value={"Snake Draft"}>Snake Draft</MenuItem>
        </Select>
        <label>How do you determine draft order?</label>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <label>Multiple drafts a year? Explain those settings here</label>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </Box>
  );
}

export default Drafts;
