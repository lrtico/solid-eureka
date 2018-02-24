import React, { Component } from 'react';
import './App.css';
import ToggleButton from './components/buttons/ToggleButton';
import MaterialIcon from 'react-google-material-icons';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';
import { randomPostId, formatTimestamp } from './utils/Helpers';
import { connect } from 'react-redux';
import { createPost } from './actions';

class Create extends Component {
  scrollIt = () => {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': 0,
      });
    }

    handleSubmit = (e) => {
      e.preventDefault()
      const values = serializeForm(e.target, { hash: true })
      console.log("Form", values)
      values.id = randomPostId()
      values.timestamp = Date.now()
      values.date = formatTimestamp()
      console.log("Random id and Timestamp", values)
      //Contact form calls up to whoever rendered it, sending the values up
      this.props.createPost(values, () => this.props.history.push('/'))
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-wrap">
            <label htmlFor="author">Author <span>(ex. Stephen King)</span></label>
            <input type="text" name="author"/>
          </div>
          <div className="input-wrap">
            <label htmlFor="title">Title <span>(ex. Somedays you eat the bear, somedays it eats you)</span></label>
            <input type="text" name="title"/>
          </div>
          <div className="input-wrap input-wrap--textarea">
            <label htmlFor="body">Post</label>
            <textarea name="body" id="post_body" cols="30" rows="10"></textarea>
          </div>
          <div className="buttons-group flex--wrap">
            <label htmlFor="">Categories <span>(select one)</span></label>
            <ToggleButton label="Business" name="Business" />
            <ToggleButton label="Entertainment" name="Entertainment" />
            <ToggleButton label="News" name="News" />
            <ToggleButton label="Politics" name="Politics" />
            <ToggleButton label="Sports" name="Sports" />
          </div>
          <div className="flex--vertical-center flex--align-right create-controls">
            <Link
              to="/"
              className="flex--default flex--vertical-center create-controls__cancel">
              <span>cancel or back</span>
              <div className="button--circ-green flex--align-center create-controls__cancel-button">
                <MaterialIcon
                   icon="arrow_back"
                   size={45}/>
              </div>
            </Link>
            <button className="button--white">create</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ posts, categories }) {
  return {
    posts: posts,
    categories: categories
  }
}

export default connect(mapStateToProps, { createPost })(Create)
