import React from "react";
import styled from "styled-components";

const CommentForm = styled.form``;
const Label = styled.label.attrs({})``;
const TextInput = styled.input.attrs(() => ({
  type: "text",
  id: "comment",
  auto: "off"
}))``;
const AuthorInput = styled.input.attrs(() => ({
  type: "text",
  id: "author",
  auto: "off"
}))``;
const SubmitButton = styled.button.attrs({ type: "submit" })``;

export default class CommentInput extends React.Component {
  state = {
    commentValue: "",
    authorValue: ""
  };

  render() {
    const { handleSubmit } = this.props;
    const { commentValue, authorValue } = this.state;

    return (
      <CommentForm
        className=""
        onSubmit={event => {
          event.preventDefault();
          return handleSubmit({ author: authorValue, text: commentValue });
        }}
      >
        <Label htmlFor="comment">Comment:</Label>
        <TextInput
          value={commentValue}
          onChange={e => this.setState({ commentValue: e.target.value })}
        />
        <Label htmlFor="author">Written By:</Label>
        <AuthorInput
          value={authorValue}
          onChange={e => this.setState({ authorValue: e.target.value })}
        />
        <SubmitButton disabled={commentValue === "" || authorValue === ""}>
          Submit
        </SubmitButton>
      </CommentForm>
    );
  }
}
