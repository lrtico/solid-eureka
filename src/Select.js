import React, { Component } from 'react'
import './App.css'

class Select extends Component {
  state = {
    isActive: false,
  }

  handleClick = (event) => {
    event.target.classList.toggle('button__toggle--on');
  }

  render() {
    return (
      <div className="button--white select flex--align-center">
        <span className="select__value">{this.props.label}</span>
        <MaterialIcon
          icon="keyboard_arrow_down"
          size={30}/>
          <div class="select__menu-wrapper">
            <div class="select__menu">
              <div class="select__menu__content">
{/* Map over a temp array of categories to generate the options */}
                <div class="select__option">Business</div>
                <div class="select__option">Entertainment</div>
                <div class="select__option">News</div>
                <div class="select__option">Politics</div>
                <div class="select__option">Sports</div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Select;
