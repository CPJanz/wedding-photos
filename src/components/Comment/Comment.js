import React from "react";
import "./Comment.css";

export default function Comment(comment) {
  const { text, author } = comment;
  return (
    <div className="comment-container">
      <p className="comment">{text}</p>
      <p className="commentor">{`-${author}`}</p>
    </div>
  );
}
