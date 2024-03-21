import React from "react";
import { TextField } from "@mui/material";

function Standings(props) {
  return (
    <div style={{ width: "45%", margin: "auto" }}>
      <h3>How are Standings determined?</h3>
      <TextField
        id="standings"
        label="Standings"
        value={props.value.standings}
        onChange={(event) => {
          props.setValue((prevValues) => ({
            ...prevValues,
            standings: event.target.value,
          }));
        }}
        variant="filled"
        fullWidth
        multiline
      />

      <h3>Is tanking allowed?</h3>
      <TextField
        id="tanking"
        label="Tanking"
        value={props.value.tanking}
        onChange={(event) =>
          props.setValue((prevValues) => ({
            ...prevValues,
            tanking: event.target.value,
          }))
        }
        variant="filled"
        fullWidth
        multiline
      />
    </div>
  );
}

export default Standings;
