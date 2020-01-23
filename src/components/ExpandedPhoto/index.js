import React from "react";
import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";
import Scrim from "../Scrim/Scrim";
import Comment from "../Comment";
import CommentInput from "../CommentInput";

const Wrapper = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px black solid;
  display: grid;
  padding: 20px;
`;
const CloseButton = styled.div`
  position: absolute;
  top: 1px;
  right: 1px;
  font-size: 25px;
`;
const PhotoSection = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;
`;

const CommentSection = styled.div`
  grid-column-start: 7;
  grid-column-end: 12;
`;

export default class ExpandedPhoto extends React.Component {
  state = {
    comments: []
  };

  componentDidMount() {
    this.setState({ comments: this.props.comments });
  }

  addComment = newComment => {
    this.setState(state => {
      return { comments: state.comments.concat(newComment) };
    });
    console.log("TODO: push new comment to the server.");
  };

  render() {
    const { url, note, onClick } = this.props;
    const { comments } = this.state;
    return (
      <Scrim>
        <Wrapper>
          <CloseButton onClick={onClick}>
            <FaRegTimesCircle />
          </CloseButton>
          <PhotoSection>
            <img src={url} alt={"SOMETHING NEEDS TO BE HERE"} />
            <p>{note}</p>
          </PhotoSection>
          <CommentSection>
            {comments.map((comment, key) => Comment(comment, key))}
            <CommentInput handleSubmit={result => this.addComment(result)} />
          </CommentSection>
        </Wrapper>
      </Scrim>
    );
  }
}
