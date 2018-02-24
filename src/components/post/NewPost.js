import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../../actions/';
import { randomPostId, formatTimestamp } from '../../utils/Helpers';
import MaterialIcon from 'react-google-material-icons';
import ToggleButton from '../buttons/ToggleButton';
import Logo from '../Logo';

class NewPost extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const title = e.target.title.value;
    const body = e.target.body.value;
    const author = e.target.author.value;
    const category = e.target.category.value;

    const submitPost = {
      id: randomPostId(),
      timestamp: Date.now(),
      dateStamp: formatTimestamp(),
      title: e.target.title.value,
      body: e.target.body.value,
      author: e.target.author.value,
      category: e.target.category.value,
      downVoteScore: 0,
      upVoteScore: 0,
    }
    this.props.createPost(submitPost, () => this.props.history.push('/'))
  }

  handleLabelonKeyup = (e) => {
    const input = e.target
    const inputValue = e.target.value
    const label = input.parentNode.getElementsByTagName('label')[0]

    if (inputValue) {
      console.log("wax on")
      label.classList.add("input-wrap--active")
    } else {
      console.log("wax off")
      label.classList.remove("input-wrap--active")
    }
  }

  handleLabelMouseOver = (e) => {
    const input = e.target
    const label = input.previousSibling
    label.classList.add("input-wrap--active")
  }

  handleLabelMouseOut = (e) => {
    // console.log("Mouse out firing")
    const input = e.target
    const inputValue = e.target.value
    const label = input.previousSibling

    if (inputValue === "") {
      label.classList.remove("input-wrap--active")
    }
  }

  render() {
    const { post, posts, fetchAllPosts, fetchPostsByCategory, category } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-wrap">
          <label htmlFor="author">Author <span>(ex. Stephen King)</span></label>
          <input type="text" name="author"
            onKeyUp={this.handleLabelonKeyup}
            onMouseOver={this.handleLabelMouseOver}
            onMouseOut={this.handleLabelMouseOut}
          />
        </div>
        <div className="input-wrap">
          <label htmlFor="title">Title <span>(ex. Somedays you eat the bear, somedays it eats you)</span></label>
          <input type="text" name="title"
            onKeyUp={this.handleLabelonKeyup}
            onMouseOver={this.handleLabelMouseOver}
            onMouseOut={this.handleLabelMouseOut}
          />
        </div>
        <div className="input-wrap input-wrap--textarea">
          <label htmlFor="body">Post</label>
          <textarea name="body" id="post_body" cols="30" rows="10"
            onKeyUp={this.handleLabelonKeyup}
            onMouseOver={this.handleLabelMouseOver}
            onMouseOut={this.handleLabelMouseOut}
          ></textarea>
        </div>
        <div className="buttons-group flex--wrap">
          <label htmlFor="category">Categories <span>(select one)</span></label>
          <ToggleButton>
            <label htmlFor="react" className="button__toggle">react</label>
          </ToggleButton>
          <input type="radio" name="category" id="react" value="react" />
          <ToggleButton>
            <label htmlFor="redux" className="button__toggle">redux</label>
          </ToggleButton>
          <input type="radio" name="category" id="redux" value="redux" />
          <ToggleButton>
            <label htmlFor="udacity" className="button__toggle">udacity</label>
          </ToggleButton>
          <input type="radio" name="category" id="udacity" value="udacity" />
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
    )
  }
}
function mapStateToProps({ posts, categories }) {
  return {
    posts: posts,
    categories: categories,
  }
}

export default connect(mapStateToProps, { createPost })(NewPost)
