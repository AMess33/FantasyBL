import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export function DetailsIcon(props) {
  if (props.value.leagueName && props.value.sport && props.value.website) {
    return <CheckCircleIcon sx={{ color: "green" }} />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function MoneyIcon(props) {
  if (props) {
    return <CheckCircleIcon sx={{ color: "green" }} />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function RosterIcon(props) {
  if (props) {
    return <CheckCircleIcon sx={{ color: "green" }} />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function StandingsIcon(props) {
  if (props) {
    return <CheckCircleIcon sx={{ color: "green" }} />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function TransactionIcon(props) {
  if (props) {
    return <CheckCircleIcon sx={{ color: "green" }} />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function OwnerIcon(props) {
  if (props) {
    return <CheckCircleIcon sx={{ color: "green" }} />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}
