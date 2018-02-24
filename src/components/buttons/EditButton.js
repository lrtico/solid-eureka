import React, { Component } from 'react'
import '../../App.css'

class EditButton extends Component {
  resetSortButtons = () => {
    const labels = document.querySelectorAll('.button__toggle')
    console.log("buttons", labels)
    for (let label of labels) {
      label.classList.remove('button__toggle--on')
      label.classList.add('button__toggle--disabled')
    }
  }
  render() {
    return (
      <div className="button-wrap__icon flex--align-center" onClick={this.resetSortButtons}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.4 22.4">
          <line className="line-art-icon" x1="12.4" y1="2.7" x2="19.7" y2="10"/>
          <line className="line-art-icon" x1="10.9" y1="4.2" x2="18.2" y2="11.5"/>
          <path className="line-art-icon" d="M0.5 14.6v7.3h7.3L21 8.6c0 0 2.4-2.9-1-6.3 -3.4-3.4-6.3-1-6.3-1L0.5 14.6z"/>
          <polyline className="line-art-icon" points="0.4 14.7 4.1 14.7 4.1 18.3 7.7 18.3 7.7 22 "/>
          <line className="line-art-icon" x1="16.3" y1="9.6" x2="7.7" y2="18.3"/>
          <line className="line-art-icon" x1="12.7" y1="6.1" x2="4.1" y2="14.7"/>
          <rect x="0.2" y="20.1" className="st1" width="1.9" height="1.9"/>
        </svg>
      </div>
    )
  }
}

export default EditButton;
