import React from "react";
import {
  FormControl,
  Select,
  Box,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

function FootballLineup() {
  return (
    <Box>
      <FormControl>
        <h3>How many starters for each position?</h3>
        <InputLabel>Quarter Back</InputLabel>
        <Select labelId="QB" id="QBSpots" value={Number} label="QBs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        <InputLabel>Running Back</InputLabel>
        <Select labelId="RB" id="RBSpots" value={Number} label="RBs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>

        <InputLabel>Wide Reciever</InputLabel>
        <Select labelId="WR" id="WRSpots" value={Number} label="WRs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        <InputLabel>Tight End</InputLabel>
        <Select labelId="TE" id="TESpots" value={Number} label="TEs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>

        <InputLabel>SuperFlex (QB/RB/WR/TE)</InputLabel>
        <Select labelId="SFX" id="SFXSpots" value={Number} label="SFXs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
        </Select>

        <InputLabel>Flex (RB/WR/TE)</InputLabel>
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
