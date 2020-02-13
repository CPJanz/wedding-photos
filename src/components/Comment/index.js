import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  border: 1px lightblue solid;
  border-radius: 10px;
  margin: 5px auto;
  max-width: 280px;
`;

const CommentText = styled.p`
  text-align: left;
  font-size: 0.8em;
  margin: 0;
`;

const Signator = styled.p`
  text-align: right;
  font-size: 0.7em;
  margin: 0;
  font-style: italic;
`;

export default function Comment(comment, key) {
  const { text, author } = comment;
  return (
    <Wrapper className="comment-container" key={key}>
      <CommentText className="comment">{text}</CommentText>
      <Signator className="commentor">{`-${author}`}</Signator>
    </Wrapper>
  );
}
