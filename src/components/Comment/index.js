import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
`;

const CommentText = styled.p`
  text-align: left;
`;

const Signator = styled.p`
  text-align: right;
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
