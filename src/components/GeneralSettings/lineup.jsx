import React from "react";
import BaseballLineup from "../Baseball/baseballLineup";
import BasketballLineup from "../Basketball/basketballLineup";
import FootballLineup from "../Football/footballLineup";
import HockeyLineup from "../Hockey/hockeyLineup";

function Lineup(props) {
  const sport = props.value.sport;

  if (sport === "baseball") return <BaseballLineup />;
  if (sport === "basketball") return <BasketballLineup />;
  if (sport === "football") return <FootballLineup />;
  if (sport === "hockey") return <HockeyLineup />;
  // if props.value.sport = baseball return baseballLineup
}

export default Lineup;
