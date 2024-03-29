import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export function DetailsIcon(props) {
  if (props.isComplete) {
    return <CheckCircleOutlineIcon />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function MoneyIcon(props) {
  if (props.isComplete) {
    return <CheckCircleOutlineIcon />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function RosterIcon(props) {
  if (props.isComplete) {
    return <CheckCircleOutlineIcon />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function StandingsIcon(props) {
  if (props.isComplete) {
    return <CheckCircleOutlineIcon />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function TransactionIcon(props) {
  if (props.isComplete) {
    return <CheckCircleOutlineIcon />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function OwnerIcon(props) {
  if (props.isComplete) {
    return <CheckCircleOutlineIcon />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}
