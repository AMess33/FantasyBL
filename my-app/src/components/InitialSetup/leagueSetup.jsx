import React from "react";
import {
  FormControl,
  Select,
  Box,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

// league style
export function LeagueStyle() {
  return (
    <Box>
      <FormControl>
        <h3>What type of league?</h3>
        <Select>
          <MenuItem value={"Head to Head Points"}>Head to Head Points</MenuItem>
          <MenuItem value={"Head to Head Categories"}>
            Head to Head Categories
          </MenuItem>
          <MenuItem value={"Rotisserie"}>Rotisserie</MenuItem>
          <MenuItem value={"AllPlay"}>All Play</MenuItem>
          <MenuItem value={"TotalPoints"}>Total Points</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

// Number of teams
export function NumberOfTeams() {
  return (
    <Box>
      <FormControl>
        <h3>How many teams in your league?</h3>
        <Select labelId="teams" id="teams" value={Number} label="teams">
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

// Roster Size
export function RosterSize() {
  return (
    <Box>
      <FormControl>
        <h3>How many players per team?</h3>
        <Select labelId="teams" id="teams" value={Number} label="teams">
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={21}>21</MenuItem>
          <MenuItem value={22}>22</MenuItem>
          <MenuItem value={23}>23</MenuItem>
          <MenuItem value={24}>24</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={26}>26</MenuItem>
          <MenuItem value={27}>27</MenuItem>
          <MenuItem value={28}>28</MenuItem>
          <MenuItem value={29}>29</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={31}>31</MenuItem>
          <MenuItem value={32}>32</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

// Owner Fees
export function OwnerFees() {
  return (
    <Box>
      <FormControl>
        <h3>What is the annual owner fee?</h3>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </FormControl>
    </Box>
  );
}

// Places Paid out
export function PlacesPaidOut() {
  return (
    <Box>
      <FormControl>
        <h3>How many places are paid out?</h3>
        <Select labelId="teams" id="teams" value={Number} label="teams">
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
        </Select>
      </FormControl>
    </Box>
  );
}
