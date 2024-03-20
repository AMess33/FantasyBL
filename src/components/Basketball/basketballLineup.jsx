import React from "react";
import { Select, MenuItem } from "@mui/material";

function BasketballLineup(props) {
  return (
    <div style={{ width: "45%", margin: "auto" }}>
      <h3>How many starters for each position?</h3>
      <h4>Point Gaurd</h4>
      <Select
        labelId="PG"
        id="PGSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.value.pointGuardSpots = event.target.value;
        }}
        value={props.value.pointGuardSpots}
        label="PGs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
      </Select>
      <h4>Shooting Gaurd</h4>
      <Select
        labelId="SG"
        id="SGSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.value.shootingGuardSpots = event.target.value;
        }}
        value={props.value.shootingGuardSpots}
        label="SGs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
      </Select>

      <h4>Small Forward</h4>
      <Select
        labelId="SF"
        id="SFSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.value.smallForwardSpots = event.target.value;
        }}
        value={props.value.smallForwardSpots}
        label="SFs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
      </Select>

      <h4>Power Forward</h4>
      <Select
        labelId="PF"
        id="PFSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.value.powerForwardSpots = event.target.value;
        }}
        value={props.value.powerForwardSpots}
        label="PFs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
      </Select>

      <h4>Center</h4>
      <Select
        labelId="C"
        id="CSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.value.centerSpots = event.target.value;
        }}
        value={props.value.centerSpots}
        label="Cs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
      </Select>

      <h4>Guard (PG/SG)</h4>
      <Select
        labelId="Guard"
        id="GSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.value.guardSpots = event.target.value;
        }}
        value={props.value.guardSpots}
        label="Gs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
      </Select>

      <h4>Forward (SF/PF)</h4>
      <Select
        labelId="Forward"
        id="FSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.value.forwardSpots = event.target.value;
        }}
        value={props.value.forwardSpots}
        label="Fs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
      </Select>

      <h4>Utility Player (PG/SG/SF/PF/C)</h4>
      <Select
        labelId="UTIL"
        id="UTILSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.value.UTILSpots = event.target.value;
        }}
        value={props.value.UTILSpots}
        label="UTILs"
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

export default BasketballLineup;
