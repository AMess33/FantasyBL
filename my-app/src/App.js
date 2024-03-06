import logo from "./logo.svg";
import "./App.css";
import React from "react";
import LeagueDetails from "./components/InitialSetup/leagueDetails";
import LeagueType from "./components/InitialSetup/leagueType";
import LeagueSetup from "./components/InitialSetup/leagueSetup";
import LeagueStyle from "./components/InitialSetup/leagueStyle";
import OwnerFees from "./components/InitialSetup/ownerFees";
import PlacesPaidOut from "./components/InitialSetup/placesPaidOut";
import NumberOfTeams from "./components/InitialSetup/numberOfTeams";
import RosterSize from "./components/InitialSetup/rosterSize";
import TeamName from "./components/InitialSetup/teamName";
import TeamLogo from "./components/InitialSetup/teamLogo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LeagueDetails />
        <LeagueType />
        <LeagueSetup />
        <LeagueStyle />
        <OwnerFees />
        <PlacesPaidOut />
        <NumberOfTeams />
        <RosterSize />
        <TeamName />
        <TeamLogo />
      </header>
    </div>
  );
}

export default App;
