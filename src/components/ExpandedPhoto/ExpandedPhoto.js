import React from "react";
import "./ExpandedPhoto.css";
import { FaRegTimesCircle } from "react-icons/fa";

export default function ExpandedPhoto(photoInfo) {
  const { url, note, onClick } = photoInfo;
  return (
    <div className="scrim">
      <div className="expanded-photo-container">
        <img src={url} alt={"SOMETHING NEEDS TO BE HERE"} />
        <p>{note.join(" ")}</p>
        <span onClick={onClick}>
          <FaRegTimesCircle />
        </span>
      </div>
    </div>
  );
}
