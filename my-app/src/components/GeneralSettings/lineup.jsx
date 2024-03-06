import React from "react";
import Box from "@mui/material/Box";
import BaseballLineup from "./Baseball/baseballLineup";
import BasketballLineup from "./Basketball/basketballLineup";
import FootballLineup from "./Football/footballLineup";
import HockeyLineup from "./Hockey/hockeyLineup";

function Lineup() {
  return (
    <Box>
      {/* display the lineup based on what was selected from leaugeDetails form */}
      <BaseballLineup />
      <BasketballLineup />
      <FootballLineup />
      <HockeyLineup />
    </Box>
  );
}

export default Lineup;
