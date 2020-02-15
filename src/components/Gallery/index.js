import React from "react";
import Photo from "../Photo";
import Loading from "../Loading";
import firebase from "../../utils/firebase";
import styled from "styled-components";
import AddPhotoButton from "../AddPhotoButton";
import FetchPhotoButton from "../FetchPhotoButton";

// ----------------------------------------------- Temporary data. remove once backend is set up
import TEMPDATA from "../../utils/tempData";
const { SAMPLE_NOTES, SAMPLE_COMMENTS } = TEMPDATA;
let REMAINING_PHOTOS = 10;
const PHOTOS_SHOWN = 10;

function generateSampleImages() {
  const SAMPLE_IMAGES = [];
  const returnedPhotos = Math.min(REMAINING_PHOTOS, PHOTOS_SHOWN);
  for (let i = 0; i < returnedPhotos; i++) {
    SAMPLE_IMAGES.push({
      url: `https://picsum.photos/600/400`,
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
// ------------------------------------------------------------ End of temporary data

const MAX_ROTATION = 5;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 90%;
  margin: 0 auto;
`;

//TODO: This should be replaced with an api call to fetch images

export default class Gallery extends React.Component {
  state = {
    images: null,
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

  submitNewPhoto = async photo => {
    photo.comments = [];
    photo.url = await firebase.uploadImage(photo.url);
    this.setState(state => {
      return { images: state.images.concat(photo) };
    });
  };

  render() {
    const { images, foundNewPhotos } = this.state;
    const screenWidth = window.screen.width;
    return (
      <React.Fragment>
        {images === null ? (
          <Loading text="Fetching Photos" />
        ) : (
          <Wrapper>
            {/* <AddPhotoButton submitNewPhoto={this.submitNewPhoto} /> */}
            {images.map((image, index) => (
              <Photo
                key={index}
                size={screenWidth > 400 ? 200 : 150}
                maxRotation={MAX_ROTATION}
                {...image}
              />
            ))}
            {/* {foundNewPhotos && <FetchPhotoButton fetch={this.fetchNewPhotos} />} */}
          </Wrapper>
        )}
      </React.Fragment>
    );
  }
}
