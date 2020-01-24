import React from "react";
import Photo from "../Photo";
import Loading from "../Loading";
import ExpandedPhoto from "../ExpandedPhoto";
import NewPhotoForm from "../NewPhotoForm";
import firebase from "../../utils/firebase";
import styled from "styled-components";
import AddPhotoButton from "../AddPhotoButton";
import FetchPhotoButton from "../FetchPhotoButton";

const SAMPLE_NOTES = [
  "Lorem ipsum",
  "dolor sit amet",
  "consectetur",
  "sed do eiusmod",
  "quis nostrud",
  "exercitation"
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

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const rotateImage = () => Math.floor(Math.random() * 16 - 8);

//TODO: This should be replaced with an api call to fetch images
function generateSampleImages() {
  const SAMPLE_IMAGES = [];
  const returnedPhotos = Math.min(REMAINING_PHOTOS, PHOTOS_SHOWN);
  for (let i = 0; i < returnedPhotos; i++) {
    SAMPLE_IMAGES.push({
      url: `https://picsum.photos/300/200`,
      rotation: rotateImage(),
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
    addClicked: false,
    foundNewPhotos: true
  };

  componentDidMount = () => {
    this.setState({ images: generateSampleImages() });
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

  submitNewPhoto = photo => {
    photo.comments = [];
    photo.rotation = rotateImage();
    firebase
      .uploadImage(photo.url)
      .then(result => (photo.url = result))
      .then(() =>
        this.setState(state => {
          return { images: state.images.concat(photo) };
        })
      );
  };

  closeScrim = target => {
    const stateObj = {};
    stateObj[target] = false;
    this.setState(stateObj);
  };

  render() {
    const { images, expandedPhoto, addClicked, foundNewPhotos } = this.state;
    return (
      <React.Fragment>
        {images === null ? (
          <Loading text="Fetching Photos" />
        ) : (
          <Wrapper>
            <AddPhotoButton
              click={() => {
                this.setState({ addClicked: true });
              }}
            />
            {images.map((image, key) => (
              <Photo
                key={`photo-${key}`}
                {...image}
                click={() => this.setState({ expandedPhoto: image })}
              />
            ))}
            {foundNewPhotos && <FetchPhotoButton fetch={this.fetchNewPhotos} />}
            {expandedPhoto && (
              <ExpandedPhoto
                {...expandedPhoto}
                close={() => this.closeScrim("expandedPhoto")}
              />
            )}
            {addClicked && (
              <NewPhotoForm
                close={() => this.closeScrim("addClicked")}
                submit={this.submitNewPhoto}
              />
            )}
          </Wrapper>
        )}
      </React.Fragment>
    );
  }
}
