import React from "react";
import styled from "styled-components";

const CommentForm = styled.form`
  position: "absolute";
`;
const Label = styled.label.attrs({})``;
const TextInput = styled.input.attrs(() => ({
  type: "text",
  id: "comment",
  auto: "off",
  placeholder: "Write your comment here",
  autoComplete: "off"
}))`
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  width: 100%;
  max-width: 180px;

  &::placeholder {
    color: gray;
    padding-left: 5px;
  }
`;
const AuthorInput = styled.input.attrs(() => ({
  type: "text",
  id: "author",
  auto: "off"
}))``;
const SubmitButton = styled.button.attrs({ type: "submit" })`
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;

export default class CommentInput extends React.Component {
  state = {
    commentValue: ""
  };

  render() {
    const { handleSubmit, author } = this.props;
    const { commentValue } = this.state;

    return (
      <CommentForm
        className=""
        onSubmit={event => {
          event.preventDefault();
          this.setState({ commentValue: "" });
          return handleSubmit({ author: author, text: commentValue });
        }}
      >
        {/* <Label htmlFor="comment">Comment:</Label> */}
        <TextInput
          value={commentValue}
          onChange={e => this.setState({ commentValue: e.target.value })}
        />
        <SubmitButton disabled={commentValue === ""}>Submit</SubmitButton>
      </CommentForm>
    );
  }
}
