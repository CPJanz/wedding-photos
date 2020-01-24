import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 200px;
  font-size: 12rem;
  text-align: center;
  line-height: 5rem;
  color: white;
  display: inline-block;
  text-shadow: grey 1px 1px;
  transition: transform 50ms ease-in-out;
  transition: text-shadow 50ms ease-in-out;

  &:hover {
    transform: translate(-5px, -5px);
    text-shadow: grey 5px 5px 3px;
  }
`;

export default function FetchPhotoButton(props) {
  return <Wrapper onClick={props.fetch}>...</Wrapper>;
}
