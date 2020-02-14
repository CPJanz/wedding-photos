import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import ExpandedPhoto from "../ExpandedPhoto";

const DEFAULT_PHOTO_SIZE = 150;
const MAX_ROTATION = 5;
const BOX_SHADOW_COLOR = "rgba(0, 0, 0, 0.4)";

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Indie+Flower&display=swap");
  transform: rotate(${props => props.rotation}deg);
  display: inline-block;
  width: ${props => props.photoSize * (17 / 15)}px;
  height: ${props => props.photoSize * (19 / 15)}px;
  background: white;
  padding: 0;
  overflow: hidden;
  border-radius: 1px;
  box-shadow: ${BOX_SHADOW_COLOR} 2px 2px;
  margin: 15px;
  transition: transform 100ms ease-in-out;
  transition: box-shadow 50ms;

  &:hover {
    transform: translate(-5px, -5px) rotate(${props => props.rotation}deg);
    box-shadow: ${BOX_SHADOW_COLOR} 7px 7px 3px;
  }
`;

const PhotoImage = styled.img`
  width: ${props => props.photoSize}px;
  height: ${props => props.photoSize}px;
  margin: ${props => props.photoSize * (1 / 15)}px auto 0 auto;
  display: block;
  object-fit: cover;
  border: 1px #f6f6f6 solid;
`;

const PhotoNote = styled.p`
  color: black;
  margin: 0 auto;
  font-family: "Indie Flower", cursive;
  font-weight: 800;
  font-size: ${props => props.photoSize * (2 / 15)}px;
`;

export default class Photo extends React.Component {
  state = {
    rotation: Math.floor(Math.random() * MAX_ROTATION * 2 - MAX_ROTATION)
  };

  render() {
    const { url, note, size = DEFAULT_PHOTO_SIZE } = this.props;
    const { rotation } = this.state;
    const bodyElement = document.getElementsByTagName("body")[0];
    return (
      <Popup
        id="thisOne"
        trigger={
          <Wrapper rotation={rotation} photoSize={size}>
            <PhotoImage
              src={url}
              alt={"TODO: SOMETHING NEEDS TO BE HERE"}
              photoSize={size}
            />
            <PhotoNote photoSize={size}>{note}</PhotoNote>
          </Wrapper>
        }
        modal
        closeOnDocumentClick
        onOpen={() => bodyElement.setAttribute("class", "no-scroll")}
        onClose={() => bodyElement.removeAttribute("class")}
        contentStyle={{
          width: "80%",
          height: "70%",
          minHeight: "550px",
          overflow: "hidden"
        }}
      >
        <ExpandedPhoto {...this.props} />
      </Popup>
    );
  }
}
