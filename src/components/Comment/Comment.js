import React from "react";
import "./Comment.css";

export default function Comment(comment, key) {
  const { text, author } = comment;
  return (
    <div className="comment-container" key={key}>
      <p className="comment">{text}</p>
      <p className="commentor">{`-${author}`}</p>
    </div>
  );
}
