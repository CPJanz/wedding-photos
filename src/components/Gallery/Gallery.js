import React from "react";
import Photo from "../Photo/Photo";
import Loading from "../Loading/Loading";

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
      url: `https://picsum.photos/200?random=${i}`,
      rotation: Math.floor(Math.random() * 20 - 10),
      note: SAMPLE_NOTES[Math.floor(Math.random() * SAMPLE_NOTES.length)]
    });
  }
  return SAMPLE_IMAGES;
}

export default class Gallery extends React.Component {
  state = {
    images: null
  };

  componentDidMount() {
    this.setState({ images: generateSampleImages() });
  }

  render() {
    const { images } = this.state;
    if (images === null) {
      return <Loading text="Fetching Photos" />;
    } else {
      return (
        <div className="grid">
          {images.map((image, key) => (
            <Photo key={`photo-${key}`} {...image} />
          ))}
        </div>
      );
    }
  }
}
