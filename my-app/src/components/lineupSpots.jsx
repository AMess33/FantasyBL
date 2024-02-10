import React from "react";
import {
  FormControl,
  Select,
  Box,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

// Display based off league details selection
// Football Lineup
export function FootballLineup() {
  return (
    <Box>
      <FormControl>
        <label>How many starters for each position?</label>
        <InputLabel>Quarter Back</InputLabel>
        <Select labelId="QB" id="QBSpots" value={Number} label="QBs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        <InputLabel>Running Back</InputLabel>
        <Select labelId="RB" id="RBSpots" value={Number} label="RBs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>

        <InputLabel>Wide Reciever</InputLabel>
        <Select labelId="WR" id="WRSpots" value={Number} label="WRs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        <InputLabel>Tight End</InputLabel>
        <Select labelId="TE" id="TESpots" value={Number} label="TEs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>

        <InputLabel>SuperFlex (QB/RB/WR/TE)</InputLabel>
        <Select labelId="SFX" id="SFXSpots" value={Number} label="SFXs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
        </Select>

        <InputLabel>Flex (RB/WR/TE)</InputLabel>
        <Select labelId="Flex" id="FlexSpots" value={Number} label="Flexs">
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

// NBA Lineup
export function BasketballLineup() {
  return (
    <Box>
      <FormControl>
        <label>How many starters for each position?</label>
        <InputLabel>Point Gaurd</InputLabel>
        <Select labelId="PG" id="PGSpots" value={Number} label="PGs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        <InputLabel>Shooting Gaurd</InputLabel>
        <Select labelId="SG" id="SGSpots" value={Number} label="SGs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>

        <InputLabel>Small Forward</InputLabel>
        <Select labelId="SF" id="SFSpots" value={Number} label="SFs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        <InputLabel>Power Forward</InputLabel>
        <Select labelId="PF" id="PFSpots" value={Number} label="PFs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>

        <InputLabel>Center</InputLabel>
        <Select labelId="C" id="CSpots" value={Number} label="Cs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>

        <InputLabel>Guard (PG/SG)</InputLabel>
        <Select labelId="Guard" id="GSpots" value={Number} label="Gs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        <InputLabel>Forward (SF/PF)</InputLabel>
        <Select labelId="Forward" id="FSpots" value={Number} label="Fs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        <InputLabel>Utility Player (PG/SG/SF/PF/C)</InputLabel>
        <Select labelId="UTIL" id="UTILSpots" value={Number} label="UTILs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
// MLB Lineup
export function BaseballLineup() {
  return (
    <Box>
      <FormControl>
        <InputLabel>1st Base</InputLabel>
        <Select labelId="1stB" id="1BSpots" value={Number} label="1Bs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>2nd Base</InputLabel>
        <Select labelId="2ndB" id="2BSpots" value={Number} label="2Bs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>Short Stop</InputLabel>
        <Select labelId="SS" id="SSSpots" value={Number} label="SSs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>3rd Base</InputLabel>
        <Select labelId="3rdB" id="3BSpots" value={Number} label="3Bs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>Right Field</InputLabel>
        <Select labelId="RF" id="RFSpots" value={Number} label="RFs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>Center Field</InputLabel>
        <Select labelId="CF" id="CFSpots" value={Number} label="CFs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
        <InputLabel>Left Field</InputLabel>
        <Select labelId="LF" id="LFSpots" value={Number} label="LFs">
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

// NHL Lineup
