import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../actions/';
import { randomPostId } from '../../utils/Helpers';

class NewComment extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const postId = this.props.match.params.postId
    const comment = e.target.body.value
    const author = e.target.author.value

    // console.log(commendBody)
    if (comment === "" || author === "") {
      alert("Both fields are mandatory");
    } else {
      const submitComment = {
        id: randomPostId(),
        parentId: postId,
        timestamp: Date.now(),
        body: comment,
        author: author
      }
      this.props.createComment(submitComment, postId,
        () => this.props.history.push(`/post/${postId}`))
    }
  }

  handleLabelonKeyup = (e) => {
    // console.log("key pressed", e.target);
    const input = e.target
    const inputValue = e.target.value
    const label = input.previousSibling

    if (inputValue) {
      // console.log("wax on")
      label.classList.add("input-wrap--active")
    } else {
      // console.log("wax off")
      label.classList.remove("input-wrap--active")
    }
  }

  handleLabelMouseOver = (e) => {
    // console.log("Mouse over firing")
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
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div className="input-wrap">
            <label htmlFor="author">Your name <span>(ex. John Cusak)</span></label>
            <input
              type="text"
              name="author"
              onKeyUp={this.handleLabelonKeyup}
              onMouseOver={this.handleLabelMouseOver}
              onMouseOut={this.handleLabelMouseOut}
            />
          </div>
          <div className="input-wrap">
            <label htmlFor="body">Comment</label>
            <textarea
              name="body" id="body"
              onKeyUp={this.handleLabelonKeyup}
              onMouseOver={this.handleLabelMouseOver}
              onMouseOut={this.handleLabelMouseOut}
            ></textarea>
          </div>
          <button className="button--white">Submit</button>
        </div>
      </form>
    )
  }
}

function mapStateToProps({ posts, categories }) {
  // console.log("state", this.state)
  return {
    posts: posts,
  }
}

export default connect(mapStateToProps, { createComment })(NewComment)
