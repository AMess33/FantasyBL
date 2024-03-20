import React from "react";
import BaseballLineup from "../Baseball/baseballLineup";
import BasketballLineup from "../Basketball/basketballLineup";
import FootballLineup from "../Football/footballLineup";
import HockeyLineup from "../Hockey/hockeyLineup";

function Lineup(props) {
  const sport = props.value.sport;

  if (sport === "MLB")
    return <BaseballLineup value={props.value} setValue={props.setValue} />;
  if (sport === "NBA")
    return <BasketballLineup value={props.value} setValue={props.setValue} />;
  if (sport === "NFL")
    return <FootballLineup value={props.value} setValue={props.setValue} />;
  if (sport === "NCAA Football")
    return <FootballLineup value={props.value} setValue={props.setValue} />;
  if (sport === "NHL")
    return <HockeyLineup value={props.value} setValue={props.setValue} />;
  // if props.value.sport = baseball return baseballLineup
}

export default Lineup;
