import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
`;

export default function Scrim(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
