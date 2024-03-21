import React from "react";
import "./App.css";
import LeagueDetails from "./components/InitialSetup/leagueDetails";
import LeagueType from "./components/InitialSetup/leagueType";
import {
  LeagueStyle,
  OwnerFees,
  PlacesPaidOut,
  NumberOfTeams,
  RosterSize,
  Payouts,
} from "./components/InitialSetup/leagueSetup";
import Commish from "./components/GeneralSettings/commish";
import Owner from "./components/GeneralSettings/owner";
import Trades from "./components/GeneralSettings/trades";
import Drafts from "./components/GeneralSettings/drafts";
import Scoring from "./components/GeneralSettings/scoring";
import Waivers from "./components/GeneralSettings/waivers";
import Standings from "./components/GeneralSettings/standings";
import Lineup from "./components/GeneralSettings/lineup";
import CreateByLaws from "./components/submit";
function App() {
  const [value, setValue] = React.useState({});

  // handleChange(fieldName => {
  //   return event => {
  //     setValue(prev => ({ …prev, [fieldName]: e.target.value })
  // onChange={handleChange(‘sport’)}
  return (
    <div className="App">
      <header className="App-header">Fantasy By Laws Generator</header>
      <div className="App-body">
        <LeagueDetails value={value} setValue={setValue} />
        <LeagueType value={value} setValue={setValue} />
        <LeagueStyle value={value} setValue={setValue} />
        <OwnerFees value={value} setValue={setValue} />
        <PlacesPaidOut value={value} setValue={setValue} />
        <Payouts value={value} setValue={setValue} />
        <NumberOfTeams value={value} setValue={setValue} />
        <Standings value={value} setValue={setValue} />
        <RosterSize value={value} setValue={setValue} />
        <Lineup value={value} setValue={setValue} />
        <Scoring value={value} setValue={setValue} />
        <Trades value={value} setValue={setValue} />
        <Drafts value={value} setValue={setValue} />
        <Waivers value={value} setValue={setValue} />
        <Commish value={value} setValue={setValue} />
        <Owner value={value} setValue={setValue} />
        <CreateByLaws value={value} setValue={setValue} />
      </div>
    </div>
  );
}

export default App;
