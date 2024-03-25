import React from "react";
import { Select, MenuItem } from "@mui/material";

function HockeyLineup(props) {
  return (
    <div style={{ width: "55%", margin: "auto" }}>
      <h3>How many starters for each position?</h3>
      <h4>Goalies</h4>
      <Select
        labelId="G"
        id="GSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.handleChange("gSpots", event.target.value);
        }}
        value={props.value.gSpots}
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
      <h4>Skaters (LW/C/RW/D)</h4>
      <Select
        labelId="SK"
        id="SKSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.handleChange("skSpots", event.target.value);
        }}
        value={props.value.skSpots}
        label="SKs"
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
      <h4>Left Wing</h4>
      <Select
        labelId="LW"
        id="LWSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.handleChange("lwSpots", event.target.value);
        }}
        value={props.value.lwSpots}
        label="LWs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <h4>Center</h4>
      <Select
        labelId="C"
        id="CSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.handleChange("cSpots", event.target.value);
        }}
        value={props.value.cSpots}
        label="Cs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <h4>Right Wing</h4>
      <Select
        labelId="RW"
        id="RWSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.handleChange("rwSpots", event.target.value);
        }}
        value={props.value.rwSpots}
        label="RWs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <h4>Defensemen</h4>
      <Select
        labelId="D"
        id="DSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.handleChange("dSpots", event.target.value);
        }}
        value={props.value.dSpots}
        label="Ds"
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
      </Select>
    </div>
  );
}

export default HockeyLineup;
