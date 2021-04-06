import React from "react";
import { useScrollTrigger } from "@material-ui/core";

const ScrollHandler = props => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "#473bf0" : "transparent",
      //color: trigger ? "white" : "black",
      transition: trigger ? "1s" : "0.9s",
      boxShadow: "none",
      padding:  trigger ? ".5px 0px" : "1rem 0"
    }
  });
};

const ScrollToColor01 = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor01;
