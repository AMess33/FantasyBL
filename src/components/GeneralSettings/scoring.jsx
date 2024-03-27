import React from "react";
import { TextField } from "@mui/material";

function Scoring(props) {
  return (
    <div style={{ margin: "auto" }}>
      <h3 style={{ width: "85%", margin: "auto", padding: "10px" }}>
        Do you have any special scoring settings? If not, tell your league where
        to find the host sites posting of scoring settings
      </h3>
      <TextField
        sx={{ width: "55%", margin: "auto" }}
        id="specialScoring"
        label="Special Scoring"
        value={props.value.specialScoring}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            specialScoring: event.target.value,
          }));
        }}
        variant="filled"
        fullWidth
        multiline
      />
    </div>
  );
}

export default Scoring;
