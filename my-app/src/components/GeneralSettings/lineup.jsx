import React from "react";
import Box from "@mui/material/Box";
import baseballLineup from "./baseballLineup";
import basketballLineup from "./basketballLineup";
import footballLineup from "./footballLineup";
import hockeyLineup from "./hockeyLineup";

function Lineup() {
  return (
    <Box>
      {/* display the lineup based on what was selected from leaugeDetails form */}
      <baseballLineup />
      <basketballLineup />
      <footballLineup />
      <hockeyLineup />
    </Box>
  );
}

export default Lineup;
