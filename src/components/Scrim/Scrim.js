import React from "react";
import "./Scrim.css";

export default function Scrim(props) {
  return <div className="scrim">{props.children}</div>;
}
