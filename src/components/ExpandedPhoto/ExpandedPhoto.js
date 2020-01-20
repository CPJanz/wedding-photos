import React from "react";
import "./ExpandedPhoto.css";
import { FaRegTimesCircle } from "react-icons/fa";
import Scrim from "../Scrim/Scrim";
import Comment from "../Comment/Comment";
import CommentInput from "../CommentInput/CommentInput";

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
        <div className="expanded-photo-container">
          <FaRegTimesCircle className="close-button" onClick={onClick} />
          <div className="expanded-photo-photo">
            <img src={url} alt={"SOMETHING NEEDS TO BE HERE"} />
            <p>{note}</p>
          </div>
          <div className="expanded-photo-comments">
            {comments.map((comment, key) => Comment(comment, key))}
            <CommentInput handleSubmit={result => this.addComment(result)} />
          </div>
        </div>
      </Scrim>
    );
  }
}
