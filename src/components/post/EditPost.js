import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllPosts, updatePost } from '../../actions/';
import { fetchCommentForPost } from '../../actions/';

class EditPost extends Component {
  componentDidMount() {
    this.props.fetchAllPosts()
    this.props.fetchCommentForPost(this.props.match.params.postId)
  }

  editPost = (e) => {
    e.preventDefault()
    const postId = this.props.post.id
    const title = e.target.title.value
    const body = e.target.body.value

    if (body === "" || title === "") {
      alert("Woah there tex. Please fill out both fields.")
    } else {
      this.props.updatePost(postId, title, body,
        () => this.props.history.push('/'))
    }
  }

  render() {
    const { post } = this.props
    const marginRight18px = {marginRight: 18}

    return (
      <div>
        <form onSubmit={this.editPost}>
          <div>
            <div>
              <label htmlFor="title">Title <span>(I like your title, great job!)</span></label>
              <input defaultValue={post.title} type="text" name="title" />
            </div>
            <div>
              <label htmlFor="body">Post</label>
              <textarea defaultValue={post.body} name="body" id="post_body" cols="30" rows="10"></textarea>
            </div>
            <button className="button--white" style={marginRight18px}>Update</button>
            <Link to={`/post/${post.id}`}>
              <button className="button--white">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ posts, comments }, { match }) {
  return {
    post: _.find(posts, { id: match.params.postId }),
    comments: comments[match.params.postId]
  }
}
export default connect(mapStateToProps, {fetchAllPosts, updatePost, fetchCommentForPost })(EditPost)
