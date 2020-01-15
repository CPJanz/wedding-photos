import React from "react";
import "./CommentInput.css";

export default class CommentInput extends React.Component {
  state = {
    commentValue: "",
    authorValue: ""
  };

  render() {
    const { handleSubmit } = this.props;
    const { commentValue, authorValue } = this.state;

    return (
      <form
        className=""
        onSubmit={event => {
          event.preventDefault();
          return handleSubmit({ author: authorValue, text: commentValue });
        }}
      >
        <label htmlFor="text">Comment:</label>
        <input
          type="text"
          id="comment"
          className="input comment-input"
          auto="off"
          value={commentValue}
          onChange={event =>
            this.setState({ commentValue: event.target.value })
          }
        />
        <label htmlFor="author">Written By:</label>
        <input
          type="text"
          id="author"
          className="input author-input"
          auto="off"
          value={authorValue}
          onChange={event => this.setState({ authorValue: event.target.value })}
        />
        <button
          className="btn"
          type="submit"
          disabled={commentValue === "" || authorValue === ""}
        >
          Submit
        </button>
      </form>
    );
  }
}
