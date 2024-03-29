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
