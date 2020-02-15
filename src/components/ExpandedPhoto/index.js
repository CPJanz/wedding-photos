import React from "react";
import styled from "styled-components";
import Comment from "../Comment";
import CommentInput from "../CommentInput";

//TODO: TEMPORARY CONTENT REMOVE ONCE SERVER AND LOCAL STORAGE IS SET UP
const user = "Carl";
//END OF TEMPORARY CONTENT

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: "6fr 6fr";
  grid-template-areas: "photo comments";

  @media (max-width: 1050px) {
    grid-template-columns: "100%";
    grid-template-columns: inherit;
    grid-template-rows: "6fr 6fr";
    grid-template-areas: "photo" "comments";
    overflow-y: scroll;
    padding: 0;
  }
`;

const PhotoSection = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Indie+Flower&display=swap");
  grid-area: photo;
  padding: 15px;
  @media screen and (max-width: 1050px) {
    & img {
      max-width: 100%;
      height: auto;
    }
    padding: 0;
  }

  & p {
    font-size: 3rem;
    margin: 0;
    font-family: "Indie Flower", cursive;
    line-height: 7rem;
  }
`;

const CommentSection = styled.div`
  grid-area: comments;
  overflow-y: auto;
  padding-top: 15px;

  @media screen and (max-width: 1050px) {
    overflow-y: visible;
  }
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
          <CommentInput
            author={user}
            handleSubmit={result => this.addComment(result)}
          />
        </CommentSection>
      </Wrapper>
    );
  }
}
