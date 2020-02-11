import React from "react";
import styled from "styled-components";
import { FaPlusSquare } from "react-icons/fa";
import Popup from "reactjs-popup";
import NewPhotoForm from "../NewPhotoForm";

const Wrapper = styled.div`
  position: relative;
  width: 190px;
`;

const Icon = styled(FaPlusSquare)`
  color: white;
  height: 150px;
  width: 150px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  filter: drop-shadow(1px 1px grey);
  transition: transform 50ms ease-in-out;
  transition: filter 25ms;

  &:hover {
    transform: translate(-51%, -51%);
    filter: drop-shadow(grey 7px 7px 1.3px);
  }
`;

export default class AddPhotoButton extends React.Component {
  state = {
    open: false
  };

  openModal = () => this.setState({ open: true });
  closeModal = () => this.setState({ open: false });

  render() {
    const { submitNewPhoto } = this.props;
    const submitAndClose = newPhoto => {
      submitNewPhoto(newPhoto);
      this.closeModal();
    };

    return (
      <Wrapper>
        {<Icon onClick={this.openModal} />}
        <Popup
          open={this.state.open}
          onClose={this.closeModal}
          closeOnDocumentClick
        >
          <NewPhotoForm submit={submitAndClose} />
        </Popup>
      </Wrapper>
    );
  }
}
