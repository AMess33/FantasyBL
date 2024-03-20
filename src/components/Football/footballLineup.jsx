import React from "react";
import { Select, MenuItem } from "@mui/material";

function FootballLineup(props) {
  return (
    <div style={{ width: "45%", margin: "auto" }}>
      <h3>How many starters for each position?</h3>
      <h4>Quarter Back</h4>
      <Select
        labelId="QB"
        id="QBSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            quarterBackSpots: event.target.value,
          });
        }}
        value={props.value.quarterBackSpots}
        label="QBs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <h4>Running Back</h4>
      <Select
        labelId="RB"
        id="RBSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            runningBackSpots: event.target.value,
          });
        }}
        value={props.value.runningBackSpots}
        label="RBs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>

      <h4>Wide Reciever</h4>
      <Select
        labelId="WR"
        id="WRSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            wideReceiverSpots: event.target.value,
          });
        }}
        value={props.value.wideReceiverSpots}
        label="WRs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
      </Select>

      <h4>Tight End</h4>
      <Select
        labelId="TE"
        id="TESpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            tightEndSpots: event.target.value,
          });
        }}
        value={props.value.tightEndSpots}
        label="TEs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>

      <h4>SuperFlex (QB/RB/WR/TE)</h4>
      <Select
        labelId="SFX"
        id="SFXSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            superFlexSpots: event.target.value,
          });
        }}
        value={props.value.superFlexSpots}
        label="SFXs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
      </Select>

      <h4>Flex (RB/WR/TE)</h4>
      <Select
        labelId="Flex"
        id="FlexSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            flexSpots: event.target.value,
          });
        }}
        value={props.value.flexSpots}
        label="Flexs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={11}>11</MenuItem>
        <MenuItem value={12}>12</MenuItem>
      </Select>
    </div>
  );
}

export default FootballLineup;
