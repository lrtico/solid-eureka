import React, { Component } from 'react'
import './App.css'

class ScrollTop extends Component {

  render() {
    return (
      <div id="top-button">
        <img src="images/top-button.svg" alt="Top" onClick={() => this.props.scrollToTheTop()}/>
      </div>
    )
  }
}

export default ScrollTop;
