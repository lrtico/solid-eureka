import _ from 'lodash';
import '../../App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTimestamp } from '../../utils/Helpers';
import { Link } from 'react-router-dom';
import { fetchCommentForPost } from '../../actions/';
import { fetchAllPosts, votePost, removePost } from '../../actions/';
import PostComment from '../comment/PostComment';
import DeleteButton from '../buttons/DeleteButton';
import EditButton from '../buttons/EditButton';
import UpvoteButton from '../buttons/UpvoteButton';
import DownVoteButton from '../buttons/DownVoteButton';
// import Comment from './Comment';


class PostDetail extends Component {

    componentDidMount() {
      this.props.fetchAllPosts()
      this.props.fetchCommentForPost(this.props.match.params.postId)
      const labels = document.querySelectorAll('.button__toggle')
      // console.log("buttons", labels)
      for (let label of labels) {
        label.classList.remove('button__toggle--on')
        label.classList.add('button__toggle--disabled')
      }
    }

    onPostDelete = (postId) => {
      // const id = this.props.match.params.postId
      this.props.removePost(postId, () => {
        this.props.history.push('/')
      })
    }

  render() {
    const { post, comments, votePost, fetchAllPosts } = this.props
    const marginBottom18px = {marginBottom: 18}
// console.log("props", this.props)
    // console.log("Up votes", post)
    return (
      <div>
        {post && (
          <section key={post.id} className="post">
            <article>
              <p className="post__date">{formatTimestamp(post.timestamp)}</p>
              <p className="post__author"><em>{post.author}</em></p>
              <div className="post_preview">
                <Link to={`/${post.category}/${post.id}/edit`}>
                  <p>{post.title}</p>
                </Link>
              </div>
              <div className="post_body">
                <p>{post.body}</p>
              </div>
              <div className="flex--vertical-center">
                <span className="category-tag">{post.category}</span>
                <div className="control-icon-wrap">
                  <div onClick={() => this.onPostDelete(post.id)} className="button-wrap__icon flex--align-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.2 21">
                      <path className="line-art-icon" d="M17.9 3l-0.6 15.3c0 1.2-1 2.2-2.3 2.2l-9.1 0c-1.3 0-2.3-1-2.3-2.2L2.8 3 17.9 3z"/>
                      <line className="line-art-icon" y1="3" x2="21.1" y2="3"/>
                      <path className="line-art-icon" d="M14 1.9L14 1.9c0-0.8-0.7-1.4-1.6-1.4l-4 0c-0.9 0-1.6 0.6-1.6 1.4l0 0 0 1.1L14 3 14 1.9z"/>
                      <line className="line-art-icon" x1="6.8" y1="6.1" x2="8" y2="18.2"/>
                      <line className="line-art-icon" x1="14.7" y1="6.1" x2="13.5" y2="18.2"/>
                      <line className="line-art-icon" x1="11" y1="6.1" x2="11" y2="18.2"/>
                    </svg>
                  </div>
                </div>
                <div className="control-icon-wrap">
                  <Link to={`/${post.category}/${post.id}/edit`}>
                    <EditButton />
                  </Link>
                </div>
                <div className="button-wrap flex--align-center">
                  <div onClick={() => {
                    votePost(post.id, "upVote")
                    fetchAllPosts()
                  }} className="button-wrap__icon upvote flex--align-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.6 24.7">
                      <path d="M2.5 21.4c0 0.5 0.4 0.8 0.8 0.8 0.5 0 0.8-0.4 0.8-0.8 0-0.5-0.4-0.8-0.8-0.8C2.9 20.6 2.5 20.9 2.5 21.4M24.5 12.3l-2.2 9c-0.4 1.4-1.3 2.4-2.5 2.4l-6.2 0c-1.1 0-1.9-0.4-2.7-0.9 -0.7-0.4-1.3-0.8-2.3-0.8l-0.8 0c-0.2 0-0.4-0.2-0.4-0.4 0-0.2 0.2-0.4 0.4-0.4l0.8 0c1.1 0 1.9 0.4 2.7 0.9 0.7 0.4 1.3 0.8 2.3 0.8l6.2 0c1 0 1.5-0.9 1.7-1.7l2.2-9c0.1-0.5 0.1-0.9-0.1-1.2 -0.2-0.3-0.7-0.4-1.1-0.4l-5.7 0c-0.5 0-0.9-0.1-1.2-0.4l0 1.6c0 2.1-1.6 3.7-3.7 3.7 -0.2 0-0.4-0.2-0.4-0.4 0-0.2 0.2-0.4 0.4-0.4 1.6 0 2.9-1.3 2.9-2.9l0-8.2c0-1.8-1.1-2.9-2.9-2.9 -0.7 0-1.2 0.6-1.2 1.2l0 4.1c0 2.4-1.7 4.3-4.1 4.5l0.1 13.6c0 0.2-0.2 0.4-0.4 0.4l-5.7 0c-0.2 0-0.4-0.2-0.4-0.4L0 8.7c0-0.2 0.2-0.4 0.4-0.4l5.7 0c0.2 0 0.4 0.2 0.4 0.4 0 0.2-0.2 0.4-0.4 0.4l-5.3 0 0.1 14.8 4.9 0L5.7 10.3c0-0.2 0.2-0.4 0.4-0.4 2.1 0 3.7-1.6 3.7-3.7l0-4.1c0-1.1 0.9-2.1 2-2.1 2.3 0 3.7 1.4 3.7 3.7l0 4.9c0 0.7 0.5 1.2 1.2 1.2l5.7 0c0.8 0 1.4 0.2 1.7 0.7C24.6 10.9 24.7 11.6 24.5 12.3"/>
                    </svg>
                  </div>
                </div>
                <div className="button-wrap flex--align-center">
                  <div onClick={() => {
                    votePost(post.id, "downVote")
                    fetchAllPosts()
                  }} className="button-wrap__icon downvote flex--align-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.7 24.6">
                        <path d="M24.5 11.4l-2.3-9C21.9 0.9 20.9 0 19.7 0l-6.2 0c-1.1 0-1.9 0.5-2.7 0.9 -0.7 0.4-1.3 0.8-2.3 0.8l-0.8 0c-0.2 0-0.4 0.2-0.4 0.4s0.2 0.4 0.4 0.4l0.8 0c1.1 0 1.9-0.5 2.7-0.9 0.7-0.4 1.3-0.8 2.3-0.8l6.2 0c1 0 1.6 0.9 1.8 1.7l2.3 9c0.1 0.5 0.1 0.9-0.1 1.2 -0.2 0.3-0.7 0.4-1.1 0.4l-5.7 0c-1.1 0-2 0.9-2 2.1l0 5.7c0 1.8-1 2.9-2.9 2.9 -0.7 0-1.2-0.6-1.2-1.2l0-4.9c0-2.4-1.8-4.3-4.1-4.5L6.6 0.5c0-0.2-0.2-0.4-0.4-0.4l-5.7 0C0.2 0.1 0 0.3 0 0.5l0.1 15.6c0 0.2 0.2 0.4 0.4 0.4l5.7 0c0.2 0 0.4-0.2 0.4-0.4l0-0.8c0-0.2-0.2-0.4-0.4-0.4 -0.2 0-0.4 0.2-0.4 0.4l0 0.4 -4.9 0L0.8 0.9l4.9 0 0.1 12.7C5.8 13.8 6 14 6.2 14c2.1 0 3.7 1.6 3.7 3.7l0 4.9c0 1.1 0.9 2 2.1 2 2.3 0 3.7-1.4 3.7-3.7l0-5.7c0-0.7 0.5-1.2 1.2-1.2l5.7 0c0.8 0 1.4-0.2 1.7-0.7C24.7 12.8 24.8 12.1 24.5 11.4M3.3 12.4c0.5 0 0.8 0.4 0.8 0.8 0 0.5-0.4 0.8-0.8 0.8 -0.5 0-0.8-0.4-0.8-0.8C2.5 12.8 2.9 12.4 3.3 12.4"/>
                      </svg>
                  </div>
                  <span className="upvote-count" title="Total vote score">
                    {post.voteScore}
                  </span>
                </div>
              </div>
            </article>
          </section>
        )}
        <div className="add-comment">
          <Link to={`/${post.category}/${post.id}/comment`}>
            <button className="button--white" style={marginBottom18px}>Add comment</button>
          </Link>
          {/* <hr/> */}
        </div>
        <section className="comments">
          <h3>Comments <span className="comments__count">{post.commentCount}</span></h3>
          {post && comments &&
             <PostComment
               category={post.category}
               comments={comments}
               history={this.props.history}
             />
          }
        </section>
      </div>
    );
  }
}

function mapStateToProps({ posts, comments }, { match }) {
  const post = _.find(posts, { id: match.params.postId })
  return {
    post: post,
    comments: comments[match.params.postId]
  }
}

export default connect(
  mapStateToProps,
  {fetchAllPosts, votePost, removePost, fetchCommentForPost}
)(PostDetail)
