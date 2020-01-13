import React from "react";
import Photo from "../Photo/Photo";
import Loading from "../Loading/Loading";
import ExpandedPhoto from "../ExpandedPhoto/ExpandedPhoto";
import Scrim from "../Scrim/Scrim";
import { FaPlusSquare, FaRegTimesCircle } from "react-icons/fa";
import "./Gallery.css";

const SAMPLE_NOTES = [
  ["Lorem ipsum"],
  ["dolor sit amet", "consectetur adipiscing"],
  ["sed do eiusmod"],
  ["quis nostrud", "exercitation"]
];

function generateSampleImages() {
  const SAMPLE_IMAGES = [];
  for (let i = 0; i < 10; i++) {
    SAMPLE_IMAGES.push({
      url: `https://picsum.photos/200`,
      rotation: Math.floor(Math.random() * 16 - 8),
      note: SAMPLE_NOTES[Math.floor(Math.random() * SAMPLE_NOTES.length)]
    });
  }
  return SAMPLE_IMAGES;
}

export default class Gallery extends React.Component {
  state = {
    images: null,
    expandedPhoto: null,
    addHover: "",
    hoverClicked: false
  };

  componentDidMount() {
    this.setState({ images: generateSampleImages() });
  }

  photoExpanded(image) {
    this.setState({ expandedPhoto: image });
  }

  expandedClosed() {
    this.setState({ expandedPhoto: null });
  }

  addClicked() {
    this.setState({ hoverClicked: true });
  }

  addClosed() {
    this.setState({ hoverClicked: false });
  }

  render() {
    const { images, expandedPhoto, addHover, hoverClicked } = this.state;
    return (
      <React.Fragment>
        {images === null ? (
          <Loading text="Fetching Photos" />
        ) : (
          <div className="grid">
            <div className="add-div">
              <FaPlusSquare
                className={`add-button ${addHover}`}
                onMouseOver={() => this.setState({ addHover: "hovering" })}
                onMouseOut={() => this.setState({ addHover: "" })}
                onClick={() => this.addClicked()}
              />
            </div>
            {images.map((image, key) => (
              <Photo
                key={`photo-${key}`}
                {...image}
                onClick={() => this.photoExpanded(image)}
              />
            ))}
            {expandedPhoto && (
              <ExpandedPhoto
                {...expandedPhoto}
                onClick={() => this.expandedClosed()}
              />
            )}
            {hoverClicked && (
              <Scrim>
                {<FaRegTimesCircle onClick={() => this.addClosed()} />}
              </Scrim>
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
}
