import React, { Component } from "react";

class welcome extends Component {
  render() {
    const {name, classRoom} = this.props
    return <h1>Welcome {this.props.name} of class {this.props.class}</h1>;
  }
}
export default welcome;
