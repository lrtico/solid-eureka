import React, { Component } from 'react';
import './App.css';
import ToggleButton from './ToggleButton';
import MaterialIcon from 'react-google-material-icons';
import { Link } from 'react-router-dom';

class Create extends Component {

  scrollIt = () => {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': 0,
      });
    }

  render() {
    return (
      <div>
        <div className="input-wrap">
          <label htmlFor="">Date <span>(ex. 10/02/18)</span></label>
          <input type="text"/>
        </div>
        <div className="input-wrap">
          <label htmlFor="">Author <span>(ex. Stephen King)</span></label>
          <input type="text"/>
        </div>
        <div className="input-wrap input-wrap--textarea">
          <label htmlFor="">Post</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="buttons-group flex--wrap">
          <label htmlFor="">Categories <span>(select one)</span></label>
          <ToggleButton label="category" />
          <ToggleButton label="category" />
          <ToggleButton label="category" />
          <ToggleButton label="category" />
          <ToggleButton label="category" />
          <ToggleButton label="category" />
          <ToggleButton label="category" />
          <ToggleButton label="category" />
          <ToggleButton label="category" />
          <ToggleButton label="category" />
        </div>
        <div className="flex--vertical-center flex--align-right create-controls">
          <Link
            to="/"
            className="flex--default flex--vertical-center create-controls__cancel">
            <span>cancel &amp; back</span>
            <div className="button--circ-green flex--align-center create-controls__cancel-button">
              <MaterialIcon
                 icon="arrow_back"
                 size={45}/>
            </div>
          </Link>
          <button className="button--white">create</button>
        </div>
      </div>
    );
  }
}

export default Create;
