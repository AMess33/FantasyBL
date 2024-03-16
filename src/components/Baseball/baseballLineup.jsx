import React from "react";
import { FormControl, Select, Box, MenuItem } from "@mui/material";

function BaseballLineup(props) {
  return (
    <Box>
      <FormControl>
        <h6>1st Base</h6>
        <Select
          labelId="1stB"
          id="1BSpots"
          variant="filled"
          value={props.value.firstBaseSpots}
          label="1Bs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <h6>2nd Base</h6>
        <Select
          labelId="2ndB"
          id="2BSpots"
          variant="filled"
          value={props.value.secondBaseSpots}
          label="2Bs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <h6>Short Stop</h6>
        <Select
          labelId="SS"
          id="SSSpots"
          variant="filled"
          value={props.value.shortStopSpots}
          label="SSs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <h6>3rd Base</h6>
        <Select
          labelId="3rdB"
          id="3BSpots"
          variant="filled"
          value={props.value.thirdBaseSpots}
          label="3Bs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <h6>Right Field</h6>
        <Select
          labelId="RF"
          id="RFSpots"
          variant="filled"
          value={props.value.rightFieldSpots}
          label="RFs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <h6>Center Field</h6>
        <Select
          labelId="CF"
          id="CFSpots"
          variant="filled"
          value={props.value.centerFieldSpots}
          label="CFs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <h6>Left Field</h6>
        <Select
          labelId="LF"
          id="LFSpots"
          variant="filled"
          value={props.value.leftFieldSpots}
          label="LFs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <h6>Catcher</h6>
        <Select
          labelId="CAT"
          id="CATSpots"
          variant="filled"
          value={props.value.catcherSpots}
          label="CATs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <h6>Starting Pitcher</h6>
        <Select
          labelId="SP"
          id="SPSpots"
          variant="filled"
          value={props.value.startingPitcherSpots}
          label="SPs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <h6>Relief Pitcher</h6>
        <Select
          labelId="RP"
          id="RPSpots"
          variant="filled"
          value={props.value.relieverPitcherSpots}
          label="RPs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <h6>Closer</h6>
        <Select
          labelId="CL"
          id="CLSpots"
          variant="filled"
          value={props.value.closerSpots}
          label="CLs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <h6>Infielder (1B, 2B, 3B, SS)</h6>
        <Select
          labelId="INF"
          id="INFSpots"
          variant="filled"
          value={props.value.infieldSpots}
          label="INFs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <h6>Outfielder (LF/RF/CF)</h6>
        <Select
          labelId="OUT"
          id="OFSpots"
          variant="filled"
          value={props.value.outfieldSpots}
          label="OFs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <h6>Utility Player (C/1B/2B/3B/SS/LF/CF/RF)</h6>
        <Select
          labelId="Util"
          id="UtilSpots"
          variant="filled"
          value={props.value.utilSpots}
          label="UTBs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default BaseballLineup;
