import React from "react";
import "./Photo.css";

export default class Photo extends React.Component {
  state = {
    hovering: "",
    clicked: false
  };

  mouseOver = () => {
    this.setState({ hovering: "hovering" });
    console.log("hovering");
  };

  mouseOut = () => {
    this.setState({ hovering: "" });
    console.log("Not hovering");
  };

  onClick = () => {
    this.setState({ clicked: true });
    console.log("clicked");
  };

  render() {
    const { url, rotation, note } = this.props;
    const { hovering } = this.state;
    return (
      <div
        style={{ transform: `rotate(${rotation}deg)` }}
        className={`photo-container ${hovering}`}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        onClick={this.onClick}
      >
        <img src={url} alt={"SOMETHING NEEDS TO BE HERE"} />
        {note.map((line, index) => {
          return (
            <p
              className={note.length > 1 ? "long-note" : "note"}
              key={`${url}-${index}`}
            >
              {line}
            </p>
          );
        })}
      </div>
    );
  }
}
