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
          value={Number}
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
          value={Number}
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
          value={Number}
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
          value={Number}
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
          value={Number}
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
          value={Number}
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
          value={Number}
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
          value={Number}
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
          value={Number}
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
          value={Number}
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
          value={Number}
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
          labelId="UTIL"
          id="UTILSpots"
          variant="filled"
          value={Number}
          label="UTILs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <h6>Outfielder (LF/RF/CF)</h6>
        <Select
          labelId="UTIL"
          id="UTILSpots"
          variant="filled"
          value={Number}
          label="UTILs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <h6>Utility Player (C/1B/2B/3B/SS/LF/CF/RF)</h6>
        <Select
          labelId="UTILBase"
          id="UBASESpots"
          variant="filled"
          value={Number}
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
