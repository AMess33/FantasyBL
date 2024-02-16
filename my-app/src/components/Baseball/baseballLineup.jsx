import React from "react";
import {
  FormControl,
  Select,
  Box,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

export function BaseballLineup() {
  return (
    <Box>
      <FormControl>
        <InputLabel>1st Base</InputLabel>
        <Select labelId="1stB" id="1BSpots" value={Number} label="1Bs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>2nd Base</InputLabel>
        <Select labelId="2ndB" id="2BSpots" value={Number} label="2Bs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>Short Stop</InputLabel>
        <Select labelId="SS" id="SSSpots" value={Number} label="SSs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>3rd Base</InputLabel>
        <Select labelId="3rdB" id="3BSpots" value={Number} label="3Bs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>Right Field</InputLabel>
        <Select labelId="RF" id="RFSpots" value={Number} label="RFs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>Center Field</InputLabel>
        <Select labelId="CF" id="CFSpots" value={Number} label="CFs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>Left Field</InputLabel>
        <Select labelId="LF" id="LFSpots" value={Number} label="LFs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>Catcher</InputLabel>
        <Select labelId="CAT" id="CATSpots" value={Number} label="CATs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>Starting Pitcher</InputLabel>
        <Select labelId="SP" id="SPSpots" value={Number} label="SPs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>Relief Pitcher</InputLabel>
        <Select labelId="RP" id="RPSpots" value={Number} label="RPs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>Closer</InputLabel>
        <Select labelId="CL" id="CLSpots" value={Number} label="CLs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>Infielder (1B, 2B, 3B, SS)</InputLabel>
        <Select labelId="UTIL" id="UTILSpots" value={Number} label="UTILs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>Outfielder (LF/RF/CF)</InputLabel>
        <Select labelId="UTIL" id="UTILSpots" value={Number} label="UTILs">
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>Utility Player (C/1B/2B/3B/SS/LF/CF/RF)</InputLabel>
        <Select labelId="UTILBase" id="UBASESpots" value={Number} label="UTBs">
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
