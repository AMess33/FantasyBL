import React from "react";
import "./App.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import LeagueDetails from "./components/InitialSetup/leagueDetails";
import LeagueType from "./components/InitialSetup/leagueType";
import {
  LeagueStyle,
  OwnerFees,
  NumberOfTeams,
  RosterSize,
  Payouts,
  Collections,
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
  // use state for form values
  const [value, setValue] = React.useState({});
  // use state for accordion expansion
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="App">
      <header className="App-header">Fantasy By Laws Generator</header>
      <div className="App-body">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary>
            <Typography sx={{ fontWeight: "bold", margin: "auto" }}>
              League Details
            </Typography>
            <CheckCircleIcon sx={{ color: "green" }} />
          </AccordionSummary>
          <AccordionDetails>
            <LeagueDetails value={value} setValue={setValue} />
            <LeagueType value={value} setValue={setValue} />
            <LeagueStyle value={value} setValue={setValue} />
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary>
            <Typography sx={{ fontWeight: "bold", margin: "auto" }}>
              League Money
            </Typography>
            <RadioButtonUncheckedIcon />
          </AccordionSummary>
          <AccordionDetails>
            <OwnerFees value={value} setValue={setValue} />
            <Payouts value={value} setValue={setValue} />
            <Collections value={value} setValue={setValue} />
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary>
            <Typography sx={{ fontWeight: "bold", margin: "auto" }}>
              Roster Settings
            </Typography>
            <RadioButtonUncheckedIcon />
          </AccordionSummary>
          <AccordionDetails>
            <NumberOfTeams value={value} setValue={setValue} />
            <RosterSize value={value} setValue={setValue} />
            <Lineup value={value} setValue={setValue} />
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary>
            <Typography sx={{ fontWeight: "bold", margin: "auto" }}>
              Standings and Scoring
            </Typography>
            <RadioButtonUncheckedIcon />
          </AccordionSummary>
          <AccordionDetails>
            <Standings value={value} setValue={setValue} />
            <Scoring value={value} setValue={setValue} />
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary>
            <Typography sx={{ fontWeight: "bold", margin: "auto" }}>
              Transaction Settings
            </Typography>
            <RadioButtonUncheckedIcon />
          </AccordionSummary>
          <AccordionDetails>
            <Drafts value={value} setValue={setValue} />
            <Waivers value={value} setValue={setValue} />
            <Trades value={value} setValue={setValue} />
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary>
            <Typography sx={{ fontWeight: "bold", margin: "auto" }}>
              Owner and Commish Expectations
            </Typography>
            <RadioButtonUncheckedIcon />
          </AccordionSummary>
          <AccordionDetails>
            <Owner value={value} setValue={setValue} />
            <Commish value={value} setValue={setValue} />
          </AccordionDetails>
        </Accordion>
        <CreateByLaws value={value} setValue={setValue} />
      </div>
    </div>
  );
}

export default App;
