import React from "react";
import BaseballLineup from "../Baseball/baseballLineup";
import BasketballLineup from "../Basketball/basketballLineup";
import FootballLineup from "../Football/footballLineup";
import HockeyLineup from "../Hockey/hockeyLineup";

function Lineup(props) {
  const sport = props.value.sport;

  if (sport === "MLB") return <BaseballLineup />;
  if (sport === "NBA") return <BasketballLineup />;
  if (sport === "NFL") return <FootballLineup />;
  if (sport === "NCAA Football") return <FootballLineup />;
  if (sport === "NHL") return <HockeyLineup />;
  // if props.value.sport = baseball return baseballLineup
}

export default Lineup;
