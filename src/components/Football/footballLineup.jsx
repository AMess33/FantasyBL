import React from "react";
import { FormControl, Select, Box, MenuItem } from "@mui/material";

function FootballLineup(props) {
  return (
    <Box>
      <FormControl>
        <h3>How many starters for each position?</h3>
        <h6>Quarter Back</h6>
        <Select
          labelId="QB"
          id="QBSpots"
          variant="filled"
          value={props.value.quarterBackSpots}
          label="QBs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        <h6>Running Back</h6>
        <Select
          labelId="RB"
          id="RBSpots"
          variant="filled"
          value={props.value.runningBackSpots}
          label="RBs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>

        <h6>Wide Reciever</h6>
        <Select
          labelId="WR"
          id="WRSpots"
          variant="filled"
          value={props.value.wideReceiverSpots}
          label="WRs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        <h6>Tight End</h6>
        <Select
          labelId="TE"
          id="TESpots"
          variant="filled"
          value={props.value.tightEndSpots}
          label="TEs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>

        <h6>SuperFlex (QB/RB/WR/TE)</h6>
        <Select
          labelId="SFX"
          id="SFXSpots"
          variant="filled"
          value={props.value.superFlexSpots}
          label="SFXs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
        </Select>

        <h6>Flex (RB/WR/TE)</h6>
        <Select
          labelId="Flex"
          id="FlexSpots"
          variant="filled"
          value={props.value.flexSpots}
          label="Flexs"
        >
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
