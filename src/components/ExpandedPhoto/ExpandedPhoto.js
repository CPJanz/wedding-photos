import React from "react";
import "./ExpandedPhoto.css";
import { FaRegTimesCircle } from "react-icons/fa";
import Scrim from "../Scrim/Scrim";
import Comment from "../Comment/Comment";

export default function ExpandedPhoto(photoInfo) {
  const { url, note, onClick, comments } = photoInfo;
  return (
    <Scrim>
      <div className="expanded-photo-container">
        <img src={url} alt={"SOMETHING NEEDS TO BE HERE"} />
        <p>{note.join(" ")}</p>
        {comments.map(comment => Comment(comment))}
        <span onClick={onClick}>
          <FaRegTimesCircle />
        </span>
      </div>
    </Scrim>
  );
}
