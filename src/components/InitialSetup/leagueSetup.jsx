import React from "react";
import { Select, MenuItem, TextField } from "@mui/material";

// league style
export function LeagueStyle(props) {
  return (
    <div style={{ width: "45%", margin: "auto" }}>
      <h3>What type of league?</h3>
      <Select
        id="matchup"
        value={props.value.matchup}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            matchup: event.target.value,
          }));
        }}
        variant="filled"
        fullWidth
      >
        <MenuItem value={"Head to Head Points"}>Head to Head Points</MenuItem>
        <MenuItem value={"Head to Head Categories"}>
          Head to Head Categories
        </MenuItem>
        <MenuItem value={"Rotisserie"}>Rotisserie</MenuItem>
        <MenuItem value={"AllPlay"}>All Play</MenuItem>
        <MenuItem value={"TotalPoints"}>Total Points</MenuItem>
      </Select>
    </div>
  );
}

// Number of teams
export function NumberOfTeams(props) {
  return (
    <div style={{ width: "45%", margin: "auto" }}>
      <h3>How many teams in your league?</h3>
      <Select
        labelId="teams"
        id="teams"
        variant="filled"
        value={props.value.teams}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            teams: event.target.value,
          }));
        }}
        label="teams"
        fullWidth
      >
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
    </div>
  );
}

// Roster Size
export function RosterSize(props) {
  return (
    <div style={{ width: "45%", margin: "auto" }}>
      <h3>How many players per team?</h3>
      <Select
        labelId="teams"
        id="roster"
        variant="filled"
        value={props.value.roster}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            roster: event.target.value,
          }));
        }}
        label="Roster Size"
        fullWidth
      >
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
    </div>
  );
}

// Owner Fees
export function OwnerFees(props) {
  return (
    <div style={{ width: "45%", margin: "auto" }}>
      <h3>What is the annual owner fee?</h3>
      <TextField
        id="outlined-basic"
        label="Owner Fees"
        value={props.value.ownerFees}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            ownerFees: event.target.value,
          }));
        }}
        variant="filled"
        fullWidth
      />
    </div>
  );
}

// Places Paid out
export function PlacesPaidOut(props) {
  return (
    <div style={{ width: "45%", margin: "auto" }}>
      <h3>How many places are paid out?</h3>
      <Select
        labelId="places"
        id="places"
        variant="filled"
        value={props.value.places}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            places: event.target.value,
          }));
        }}
        label="Places Paid"
        fullWidth
      >
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
    </div>
  );
}
