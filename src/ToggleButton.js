import React, { Component } from 'react'
import './App.css'

class ToggleButton extends Component {
  state = {
    isActive: false,
  }

  handleClick = (event) => {
    event.target.classList.toggle('button__toggle--on');
  }

  render() {
    return (
      <span className="button__toggle" onClick={this.handleClick}>{this.props.label}</span>
    )
  }
}

export default ToggleButton;
