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
function FootballLineup() {
  return (
    <Box>
      <FormControl>
        <label>How many starters for each position?</label>
        <InputLabel>QB</InputLabel>
        <Select value={1}>1</Select>
        <Select value={2}>2</Select>
        <Select value={3}>3</Select>
        <InputLabel>RB</InputLabel>
        <Select value={1}>1</Select>
        <Select value={2}>2</Select>
        <Select value={3}>3</Select>
        <Select value={4}>4</Select>
        <InputLabel>WR</InputLabel>
        <Select value={1}>1</Select>
        <Select value={2}>2</Select>
        <Select value={3}>3</Select>
        <Select value={4}>4</Select>
        <Select>5</Select>
        <InputLabel>TE</InputLabel>
        <Select value={1}>1</Select>
        <Select value={2}>2</Select>
        <Select value={3}>3</Select>
        <InputLabel>SuperFlex (QB/RB/WR/TE)</InputLabel>
        <Select value={1}>1</Select>
        <Select value={2}>2</Select>
        <InputLabel>Flex (RB/WR/TE)</InputLabel>
        <Select value={1}>1</Select>
        <Select value={2}>2</Select>
        <Select value={3}>3</Select>
        <Select value={4}>4</Select>
        <Select>5</Select>
      </FormControl>
    </Box>
  );
}

// NBA Lineup
function BasketballLineup() {
  return (
    <Box>
      <FormControl>
        <label>How many starters for each position?</label>
        <InputLabel>Point Gaurd</InputLabel>
        <Select value={1}>1</Select>
        <Select value={2}>2</Select>
        <Select value={3}>3</Select>
        <InputLabel>Shooting Gaurd</InputLabel>
        <Select value={1}>1</Select>
        <Select value={2}>2</Select>
        <Select value={3}>3</Select>
        <Select value={4}>4</Select>
        <InputLabel>Small Forward</InputLabel>
        <Select value={1}>1</Select>
        <Select value={2}>2</Select>
        <Select value={3}>3</Select>
        <Select value={4}>4</Select>
        <Select value={5}>5</Select>
        <InputLabel>Power Forward</InputLabel>
        <Select value={1}>1</Select>
        <Select value={2}>2</Select>
        <Select value={3}>3</Select>
        <InputLabel>Center</InputLabel>
        <Select value={1}>1</Select>
        <Select value={2}>2</Select>
        <Select value={3}>3</Select>
        <InputLabel>Guard (PG/SG)</InputLabel>
        <Select value={1}>1</Select>
        <Select value={2}>2</Select>
        <Select value={3}>3</Select>
        <Select value={4}>4</Select>
        <Select value={5}>5</Select>
        <InputLabel>Forward (SF/PF)</InputLabel>
        <Select value={1}>1</Select>
        <Select value={2}>2</Select>
        <Select value={3}>3</Select>
        <Select value={4}>4</Select>
        <Select value={5}>5</Select>
        <InputLabel>Utility Player (PG/SG/SF/PF/C)</InputLabel>
        <Select value={1}>1</Select>
        <Select value={2}>2</Select>
        <Select value={3}>3</Select>
        <Select value={4}>4</Select>
      </FormControl>
    </Box>
  );
}
// MLB Lineup

// NHL Lineup
