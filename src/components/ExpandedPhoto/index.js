import React from "react";
import styled from "styled-components";
import Comment from "../Comment";
import CommentInput from "../CommentInput";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: "6fr 6fr";
  grid-template-areas: "photo comments";

  @media (max-width: 1000px) {
    grid-template-columns: "100%";
    grid=template-columns: inherit;
    grid-template-rows: "400px 600px";
    grid-template-areas: "photo" "comments";
    overflow-y: scroll;
    padding: 0;
  }
`;

const PhotoSection = styled.div`
  grid-area: photo;
  padding: 15px;
  @media (max-width: 1000px) {
    & img {
      width: 100%;
    }
    padding: 0;
  }
`;

const CommentSection = styled.div`
  grid-area: comments;
  overflow-y: scroll;
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
    const { url, note } = this.props;
    const { comments } = this.state;
    return (
      <Wrapper>
        <PhotoSection>
          <img src={url} alt={"SOMETHING NEEDS TO BE HERE"} />
          <p>{note}</p>
        </PhotoSection>
        <CommentSection>
          {comments.map((comment, key) => Comment(comment, key))}
          <CommentInput handleSubmit={result => this.addComment(result)} />
        </CommentSection>
      </Wrapper>
    );
  }
}
