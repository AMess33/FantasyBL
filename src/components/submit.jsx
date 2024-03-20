import React from "react";
import { Stack, Button } from "@mui/material";

// bring in the google docs api
// create a new google doc
// populate with props from form submit

function CreateByLaws(props) {
  return (
    <Stack>
      <Button variant="contained" onClick={() => console.log(props.value)}>
        Create Bylaws with Google Docs
      </Button>
    </Stack>
  );
}

export default CreateByLaws;
