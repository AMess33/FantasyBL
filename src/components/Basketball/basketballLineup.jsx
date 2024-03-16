import React from "react";
import { FormControl, Select, Box, MenuItem } from "@mui/material";

function BasketballLineup(props) {
  return (
    <Box>
      <FormControl>
        <h3>How many starters for each position?</h3>
        <h6>Point Gaurd</h6>
        <Select
          labelId="PG"
          id="PGSpots"
          variant="filled"
          value={props.value.pointGuardSpots}
          label="PGs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
        <h6>Shooting Gaurd</h6>
        <Select
          labelId="SG"
          id="SGSpots"
          variant="filled"
          value={props.value.shootingGuardSpots}
          label="SGs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        <h6>Small Forward</h6>
        <Select
          labelId="SF"
          id="SFSpots"
          variant="filled"
          value={props.value.smallForwardSpots}
          label="SFs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        <h6>Power Forward</h6>
        <Select
          labelId="PF"
          id="PFSpots"
          variant="filled"
          value={props.value.powerForwardSpots}
          label="PFs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        <h6>Center</h6>
        <Select
          labelId="C"
          id="CSpots"
          variant="filled"
          value={props.value.centerSpots}
          label="Cs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        <h6>Guard (PG/SG)</h6>
        <Select
          labelId="Guard"
          id="GSpots"
          variant="filled"
          value={props.value.guardSpots}
          label="Gs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        <h6>Forward (SF/PF)</h6>
        <Select
          labelId="Forward"
          id="FSpots"
          variant="filled"
          value={props.value.forwardSpots}
          label="Fs"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        <h6>Utility Player (PG/SG/SF/PF/C)</h6>
        <Select
          labelId="UTIL"
          id="UTILSpots"
          variant="filled"
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
      </FormControl>
    </Box>
  );
}

export default BasketballLineup;
