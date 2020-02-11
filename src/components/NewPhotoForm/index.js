import React from "react";
import styled from "styled-components";
import { FaRegTimesCircle, FaFileUpload } from "react-icons/fa";
import Scrim from "../Scrim";

const Wrapper = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px black solid;
  display: grid;
  padding: 20px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1px;
  right: 1px;
  font-size: 25px;
`;

const LengthCounter = styled.span`
  &.max {
    color: red;
  }
`;

export default class NewPhotoForm extends React.Component {
  //TODO: Change starting url to something else once photo upload has been added.
  state = { newPhoto: { url: "", note: "" } };

  render() {
    const { submit } = this.props;
    const { newPhoto } = this.state;
    const noteAtMaxLength = newPhoto.note.length >= 12;
    return (
      <Wrapper>
        <div className="new-photo-upload-node">
          <FaFileUpload />
          <form
            className=""
            onSubmit={event => {
              event.preventDefault();
              submit(newPhoto);
            }}
          >
            {newPhoto.url && <img src={newPhoto.url} alt="Upload preview" />}
            <input
              type="file"
              accept="image/*"
              onChange={event =>
                this.setState({
                  newPhoto: {
                    note: newPhoto.note,
                    url: URL.createObjectURL(event.target.files[0])
                  }
                })
              }
            />
            <input
              type="text"
              id="comment"
              className="input note-input"
              auto="off"
              value={newPhoto.note}
              onChange={event => {
                const trimmedValue = event.target.value.slice(0, 12);
                this.setState({
                  newPhoto: {
                    note: trimmedValue,
                    url: this.state.newPhoto.url
                  }
                });
              }}
            />
            <LengthCounter className={`${noteAtMaxLength ? "max" : ""}`}>
              {newPhoto.note.length}/12
            </LengthCounter>
            <button
              className="btn"
              type="submit"
              disabled={newPhoto.url === ""}
            >
              Submit
            </button>
          </form>
        </div>
      </Wrapper>
    );
  }
}
