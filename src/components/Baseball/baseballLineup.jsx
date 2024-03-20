import React from "react";
import { Select, MenuItem } from "@mui/material";

function BaseballLineup(props) {
  return (
    <div style={{ width: "45%", margin: "auto" }}>
      <h4>1st Base</h4>
      <Select
        labelId="1stB"
        id="1BSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            firstBaseSpots: event.target.value,
          });
        }}
        value={props.value.firstBaseSpots}
        label="1Bs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <h4>2nd Base</h4>
      <Select
        labelId="2ndB"
        id="2BSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            secondBaseSpots: event.target.value,
          });
        }}
        value={props.value.secondBaseSpots}
        label="2Bs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <h4>Short Stop</h4>
      <Select
        labelId="SS"
        id="SSSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            shortStopSpots: event.target.value,
          });
        }}
        value={props.value.shortStopSpots}
        label="SSs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <h4>3rd Base</h4>
      <Select
        labelId="3rdB"
        id="3BSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            thirdBaseSpots: event.target.value,
          });
        }}
        value={props.value.thirdBaseSpots}
        label="3Bs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <h4>Right Field</h4>
      <Select
        labelId="RF"
        id="RFSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            rightFieldSpots: event.target.value,
          });
        }}
        value={props.value.rightFieldSpots}
        label="RFs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <h4>Center Field</h4>
      <Select
        labelId="CF"
        id="CFSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            centerFieldSpots: event.target.value,
          });
        }}
        value={props.value.centerFieldSpots}
        label="CFs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <h4>Left Field</h4>
      <Select
        labelId="LF"
        id="LFSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            leftFieldSpots: event.target.value,
          });
        }}
        value={props.value.leftFieldSpots}
        label="LFs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <h4>Catcher</h4>
      <Select
        labelId="CAT"
        id="CATSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            catcherSpots: event.target.value,
          });
        }}
        value={props.value.catcherSpots}
        label="CATs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <h4>Starting Pitcher</h4>
      <Select
        labelId="SP"
        id="SPSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            startingPitcherSpots: event.target.value,
          });
        }}
        value={props.value.startingPitcherSpots}
        label="SPs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <h4>Relief Pitcher</h4>
      <Select
        labelId="RP"
        id="RPSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            relieverPitcherSpots: event.target.value,
          });
        }}
        value={props.value.relieverPitcherSpots}
        label="RPs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <h4>Closer</h4>
      <Select
        labelId="CL"
        id="CLSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            closerSpots: event.target.value,
          });
        }}
        value={props.value.closerSpots}
        label="CLs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <h4>Infielder (1B, 2B, 3B, SS)</h4>
      <Select
        labelId="INF"
        id="INFSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            infieldSpots: event.target.value,
          });
        }}
        value={props.value.infieldSpots}
        label="INFs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <h4>Outfielder (LF/RF/CF)</h4>
      <Select
        labelId="OUT"
        id="OFSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            outfieldSpots: event.target.value,
          });
        }}
        value={props.value.outfieldSpots}
        label="OFs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <h4>Utility Player (C/1B/2B/3B/SS/LF/CF/RF)</h4>
      <Select
        labelId="Util"
        id="UtilSpots"
        variant="filled"
        fullWidth
        onChange={(event) => {
          props.setValue({
            ...props.value,
            utilSpots: event.target.value,
          });
        }}
        value={props.value.utilSpots}
        label="UTBs"
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
    </div>
  );
}

export default BaseballLineup;
