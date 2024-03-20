import React from "react";
import { TextField } from "@mui/material";

function Commish(props) {
  return (
    <div style={{ width: "65%", margin: "auto" }}>
      <h3>Commisioner's best intrest clause?</h3>
      <TextField
        sx={{ height: 20 }}
        id="commishClause"
        value={props.value.commishClause}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            commishClause: event.target.value,
          }));
        }}
        variant="filled"
      />
    </div>
  );
}

export default Commish;
