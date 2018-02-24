import React, { Component } from 'react'
import '../../App.css'

class DeleteButton extends Component {

  handleClick = (event) => {
    event.target.classList.toggle('button__toggle--on');
  }

  render() {
    return (
      <div className="button-wrap__icon flex--align-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.2 21">
          <path className="line-art-icon" d="M17.9 3l-0.6 15.3c0 1.2-1 2.2-2.3 2.2l-9.1 0c-1.3 0-2.3-1-2.3-2.2L2.8 3 17.9 3z"/>
          <line className="line-art-icon" y1="3" x2="21.1" y2="3"/>
          <path className="line-art-icon" d="M14 1.9L14 1.9c0-0.8-0.7-1.4-1.6-1.4l-4 0c-0.9 0-1.6 0.6-1.6 1.4l0 0 0 1.1L14 3 14 1.9z"/>
          <line className="line-art-icon" x1="6.8" y1="6.1" x2="8" y2="18.2"/>
          <line className="line-art-icon" x1="14.7" y1="6.1" x2="13.5" y2="18.2"/>
          <line className="line-art-icon" x1="11" y1="6.1" x2="11" y2="18.2"/>
        </svg>
      </div>
    )
  }
}

export default DeleteButton;
