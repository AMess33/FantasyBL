import logo from "./logo.svg";
import "./App.css";
import React from "react";
import LeagueDetails from "./components/InitialSetup/leagueDetails";
import LeagueType from "./components/InitialSetup/leagueType";
import LeagueStyle from "./components/InitialSetup/leagueStyle";
import OwnerFees from "./components/InitialSetup/ownerFees";
import PlacesPaidOut from "./components/InitialSetup/placesPaidOut";
import NumberOfTeams from "./components/InitialSetup/numberOfTeams";
import RosterSize from "./components/InitialSetup/rosterSize";
import Commish from "./components/GeneralSettings/commish";
import Owner from "./components/GeneralSettings/owner";
import Trades from "./components/GeneralSettings/trades";
import Drafts from "./components/GeneralSettings/drafts";
import Scoring from "./components/GeneralSettings/scoring";
import Waivers from "./components/GeneralSettings/waivers";
import Standings from "./components/GeneralSettings/standings";
import Lineup from "./components/GeneralSettings/lineup";
function App() {
  return (
    <div className="App">
      <header className="App-header">Fantasy By Laws Generator</header>
      <div className="App-body">
        <LeagueDetails />
        <LeagueType />
        <LeagueStyle />
        <OwnerFees />
        <PlacesPaidOut />
        <NumberOfTeams />
        <Standings />
        <RosterSize />
        <Lineup />
        <Scoring />
        <Trades />
        <Drafts />
        <Waivers />
        <Commish />
        <Owner />
      </div>
    </div>
  );
}

export default App;
