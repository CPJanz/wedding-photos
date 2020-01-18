import React from "react";
import "./NewPhotoForm.css";
import { FaRegTimesCircle, FaFileUpload } from "react-icons/fa";

const SAMPLE_IMAGE = `https://picsum.photos/300/200`;

export default class NewPhotoForm extends React.Component {
  //TODO: Change starting url to something else once photo upload has been added.
  state = { newPhoto: { url: SAMPLE_IMAGE, note: "" } };

  render() {
    const { close, submit } = this.props;
    const { newPhoto } = this.state;
    return (
      <div className="new-photo-container">
        <FaRegTimesCircle className="close-button" onClick={() => close()} />
        <div className="new-photo-upload-node">
          <FaFileUpload />
          <form
            className=""
            onSubmit={event => {
              event.preventDefault();
              console.log("submitting");
              console.log(newPhoto);
              submit(newPhoto);
              close();
            }}
          >
            <input
              type="text"
              id="comment"
              className="input note-input"
              auto="off"
              value={newPhoto.note}
              onChange={event =>
                this.setState({
                  newPhoto: {
                    note: event.target.value,
                    url: this.state.newPhoto.url
                  }
                })
              }
            />
            <button
              className="btn"
              type="submit"
              disabled={newPhoto.url === ""}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
