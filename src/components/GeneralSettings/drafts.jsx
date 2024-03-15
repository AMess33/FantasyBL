import React from "react";
import { FormControl, Select, Box, MenuItem, TextField } from "@mui/material";

function Drafts(props) {
  return (
    <Box>
      <FormControl>
        <h3>What draft format do you use?</h3>
        <Select id="draftFormat" variant="filled">
          <MenuItem value={"Auction"}>Auction</MenuItem>
          <MenuItem value={"Snake Draft"}>Snake Draft</MenuItem>
        </Select>
        <h3>How do you determine draft order?</h3>
        <TextField id="setOrder" variant="filled" />
        <h3>Multiple drafts a year? Explain those settings here</h3>
        <TextField id="multipleDrafts" variant="filled" />
      </FormControl>
    </Box>
  );
}

export default Drafts;
