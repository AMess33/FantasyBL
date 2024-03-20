import React from "react";
import { TextField } from "@mui/material";

function OwnerExpectations(props) {
  return (
    <div style={{ width: "45%", margin: "auto" }}>
      <h3>Owner Expectations</h3>
      <TextField
        id="owner"
        label="Owner Expectations"
        value={props.value.owner}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            owner: event.target.value,
          }));
        }}
        variant="filled"
        fullWidth
      />
    </div>
  );
}

export default OwnerExpectations;
