import React from "react";
import { TextField } from "@mui/material";

function Commish(props) {
  return (
    <div style={{ width: "45%", margin: "auto" }}>
      <h3>Commisioner's best intrest clause?</h3>
      <TextField
        id="commishClause"
        label="Commissioner's Clause"
        value={props.value.commishClause}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            commishClause: event.target.value,
          }));
        }}
        variant="filled"
        fullWidth
        multiline
      />
    </div>
  );
}

export default Commish;
