import React from "react";
import styled from "styled-components";
import Photo from "../Photo";

const Wrapper = styled.div`
  & > * {
    position: absolute;
  }
`;

export default class PhotoStack extends React.Component {
  state = {
    rotation: Math.floor(
      Math.random() * (this.props.maxRotation || 0) * 2 -
        (this.props.maxRotation || 0)
    ),
  };

  render() {
    const { photos } = this.props;

    return (
      <Wrapper>
        {photos.map((photo, index) => (
          <Photo key={index} style={{ zIndex: index }} {...photo} />
        ))}
      </Wrapper>
    );
  }
}
