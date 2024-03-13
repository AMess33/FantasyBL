import React from "react";
import { FormControl, Select, Box, MenuItem } from "@mui/material";

function FootballLineup(props) {
  return (
    <Box>
      <FormControl>
        <h3>How many starters for each position?</h3>
        <h6>Quarter Back</h6>
        <Select labelId="QB" id="QBSpots" value={Number} label="QBs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        <h6>Running Back</h6>
        <Select labelId="RB" id="RBSpots" value={Number} label="RBs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>

        <h6>Wide Reciever</h6>
        <Select labelId="WR" id="WRSpots" value={Number} label="WRs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        <h6>Tight End</h6>
        <Select labelId="TE" id="TESpots" value={Number} label="TEs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>

        <h6>SuperFlex (QB/RB/WR/TE)</h6>
        <Select labelId="SFX" id="SFXSpots" value={Number} label="SFXs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
        </Select>

        <h6>Flex (RB/WR/TE)</h6>
        <Select labelId="Flex" id="FlexSpots" value={Number} label="Flexs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default FootballLineup;
