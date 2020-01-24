import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.p`
  font-size: 35px;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 20px;
  text-align: center;
`;

export default class Loading extends React.Component {
  state = { content: this.props.text };

  static propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired
  };

  static defaultProps = {
    text: "Loading",
    speed: 300
  };

  componentDidMount() {
    const { text, speed } = this.props;
    this.interval = window.setInterval(() => {
      this.state.content === `${text}...`
        ? this.setState({ content: text })
        : this.setState({ content: this.state.content + "." });
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <Wrapper>{this.state.content}</Wrapper>;
  }
}
