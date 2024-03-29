import React from "react";
import { CheckCircleIcon, RadioButtonUncheckedIcon } from "@mui/icons-material";

export function DetailsIcon(props) {
  if (props.isComplete) {
    return <CheckCircleIcon />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function MoneyIcon(props) {
  if (props.isComplete) {
    return <CheckCircleIcon />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function RosterIcon(props) {
  if (props.isComplete) {
    return <CheckCircleIcon />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function StandingsIcon(props) {
  if (props.isComplete) {
    return <CheckCircleIcon />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function TransactionIcon(props) {
  if (props.isComplete) {
    return <CheckCircleIcon />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}

export function OwnerIcon(props) {
  if (props.isComplete) {
    return <CheckCircleIcon />;
  } else {
    return <RadioButtonUncheckedIcon />;
  }
}
