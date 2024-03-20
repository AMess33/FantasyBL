import React from "react";
import { TextField } from "@mui/material";

function Scoring(props) {
  return (
    <div style={{ width: "65%", margin: "auto" }}>
      <h5>
        Do you have any special scoring settings? If not, tell your league where
        to find the host sites posting of scoring settings
      </h5>
      <TextField
        id="specialScoring"
        sx={{ height: 20 }}
        value={props.value.specialScoring}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            specialScoring: event.target.value,
          }));
        }}
        variant="filled"
        fullWidth
      />
    </div>
  );
}

export default Scoring;
