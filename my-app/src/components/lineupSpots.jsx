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
        <Select>1</Select>
        <Select>2</Select>
        <Select>3</Select>
        <InputLabel>RB</InputLabel>
        <Select>1</Select>
        <Select>2</Select>
        <Select>3</Select>
        <Select>4</Select>
        <InputLabel>WR</InputLabel>
        <Select>1</Select>
        <Select>2</Select>
        <Select>3</Select>
        <Select>4</Select>
        <Select>5</Select>
        <InputLabel>TE</InputLabel>
        <Select>1</Select>
        <Select>2</Select>
        <Select>3</Select>
        <InputLabel>SuperFlex (QB/RB/WR/TE)</InputLabel>
        <Select>1</Select>
        <Select>2</Select>
        <InputLabel>Flex (RB/WR/TE)</InputLabel>
        <Select>1</Select>
        <Select>2</Select>
        <Select>3</Select>
        <Select>4</Select>
        <Select>5</Select>
      </FormControl>
    </Box>
  );
}

// NBA Lineup

// MLB Lineup

// NHL Lineup
