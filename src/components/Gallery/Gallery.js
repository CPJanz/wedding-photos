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

const SAMPLE_COMMENTS = [
  { text: "Lorem ipsum dolor sit amet", author: "Sandy" },
  {
    text:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Richard"
  },
  { text: "Ut enim ad minim veniam.", author: "Daisy" },
  {
    text:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Pedro"
  }
];

let REMAINING_PHOTOS = 10;
const PHOTOS_SHOWN = 5;

//TODO: This should be replaced with an api call to fetch images
function generateSampleImages() {
  const SAMPLE_IMAGES = [];
  const returnedPhotos = Math.min(REMAINING_PHOTOS, PHOTOS_SHOWN);
  for (let i = 0; i < returnedPhotos; i++) {
    SAMPLE_IMAGES.push({
      url: `https://picsum.photos/300/200`,
      rotation: Math.floor(Math.random() * 16 - 8),
      note: SAMPLE_NOTES[Math.floor(Math.random() * SAMPLE_NOTES.length)],
      comments: SAMPLE_COMMENTS.slice(
        0,
        Math.floor(Math.random() * SAMPLE_COMMENTS.length)
      )
    });
    REMAINING_PHOTOS--;
  }
  console.log("Photos remaining:", REMAINING_PHOTOS);
  return SAMPLE_IMAGES;
}

export default class Gallery extends React.Component {
  state = {
    images: null,
    expandedPhoto: null,
    addHover: "",
    hoverClicked: false,
    fetchHover: "",
    foundNewPhotos: true
  };

  componentDidMount = () => {
    this.setState({ images: generateSampleImages() });
  };

  photoExpanded = image => {
    this.setState({ expandedPhoto: image });
  };

  expandedClosed = () => {
    this.setState({ expandedPhoto: null });
  };

  addClicked = () => {
    this.setState({ hoverClicked: true });
  };

  addClosed = () => {
    this.setState({ hoverClicked: false });
  };

  fetchNewPhotos = () => {
    const newPhotos = generateSampleImages();
    this.setState(state => {
      return {
        images: state.images.concat(newPhotos),
        foundNewPhotos: newPhotos.length > 0 ? true : false
      };
    });
  };

  render() {
    const {
      images,
      expandedPhoto,
      addHover,
      hoverClicked,
      fetchHover,
      foundNewPhotos
    } = this.state;
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
            {foundNewPhotos && (
              <div
                className={`more-imgs-btn ${fetchHover}`}
                onMouseOver={() => {
                  this.setState({ fetchHover: "hovering" });
                }}
                onMouseOut={() => {
                  this.setState({ fetchHover: "" });
                }}
                onClick={this.fetchNewPhotos}
              >
                ...
              </div>
            )}
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
