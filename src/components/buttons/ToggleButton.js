import React, { Component } from 'react'
import '../../App.css'

class ToggleButton extends Component {
  state = {
    isActive: false,
  }

  handleClick = (event) => {
    const button = event.target
    const allButton = document.getElementsByClassName('button__toggle')

    if (button.classList.contains('button__toggle--on')) {
      button.classList.remove('button__toggle--on')
      return false
    } else {
      for (let aButton of allButton) {
        aButton.classList.remove('button__toggle--on')
      }
      button.classList.add('button__toggle--on')
    }
  }

  render() {
    return (
      <span className="button__toggle--spacing"
        onClick={this.handleClick}>
        {this.props.children}
      </span>
    )
  }
}

export default ToggleButton;
