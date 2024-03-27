import React from "react";
import { Select, MenuItem, TextField } from "@mui/material";

// league style
export function LeagueStyle(props) {
  return (
    <div style={{ width: "55%", margin: "auto" }}>
      <h3>Leagues matchup format?</h3>
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
    <div style={{ width: "55%", margin: "auto" }}>
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
    <div style={{ width: "55%", margin: "auto" }}>
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
        <MenuItem value={33}>33</MenuItem>
        <MenuItem value={34}>34</MenuItem>
        <MenuItem value={35}>35</MenuItem>
        <MenuItem value={36}>36</MenuItem>
        <MenuItem value={37}>37</MenuItem>
        <MenuItem value={38}>38</MenuItem>
        <MenuItem value={39}>39</MenuItem>
        <MenuItem value={40}>40</MenuItem>
      </Select>
    </div>
  );
}

// Owner Fees
export function OwnerFees(props) {
  return (
    <div style={{ width: "55%", margin: "auto" }}>
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

// Change to 'payment method'
export function Collections(props) {
  return (
    <div style={{ width: "55%", margin: "auto" }}>
      <h3>How are league dues collected?</h3>
      <TextField
        id="outlined-basic"
        label="Collections"
        variant="filled"
        fullWidth
        multiline
        value={props.value.collections}
        onChange={(event) =>
          props.setValue((prevValues) => ({
            ...prevValues,
            collections: event.target.value,
          }))
        }
      />
    </div>
  );
}

export function Payouts(props) {
  return (
    <div style={{ width: "55%", margin: "auto" }}>
      <h3>Payout structure?</h3>
      <TextField
        id="outlined-basic"
        label="Payouts"
        value={props.value.payouts}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            payouts: event.target.value,
          }));
        }}
        variant="filled"
        fullWidth
        multiline
      />
    </div>
  );
}
