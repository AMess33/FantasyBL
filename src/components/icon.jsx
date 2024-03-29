import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export function DetailsIcon(props) {
  if (
    props.value.leagueName &&
    props.value.sport &&
    props.value.website &&
    props.value.LeagueType &&
    props.value.specialLeagueType &&
    props.value.matchup
  ) {
    return <CheckCircleIcon sx={{ color: "green" }} />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function MoneyIcon(props) {
  if (props.value.ownerFees && props.value.collections && props.value.payouts) {
    return <CheckCircleIcon sx={{ color: "green" }} />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function RosterIcon(props) {
  if (props.value.teams && props.value.roster && props.value.lineup) {
    return <CheckCircleIcon sx={{ color: "green" }} />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function StandingsIcon(props) {
  if (
    props.value.standings &&
    props.value.tanking &&
    props.value.specialScoring
  ) {
    return <CheckCircleIcon sx={{ color: "green" }} />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function TransactionIcon(props) {
  if (
    props.value.draftFormat &&
    props.value.setOrder &&
    props.value.multipleDrafts &&
    props.value.waivers &&
    props.value.specialWaiver &&
    props.value.tradeAsset &&
    props.value.veto &&
    props.value.collusion
  ) {
    return <CheckCircleIcon sx={{ color: "green" }} />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function OwnerIcon(props) {
  if (props.value.owner && props.value.commishClause) {
    return <CheckCircleIcon sx={{ color: "green" }} />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}
