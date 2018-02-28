import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { formatTimestamp } from '../../utils/Helpers';
import { Link } from 'react-router-dom';
import { fetchCommentForPost } from '../../actions/';
import DeleteButton from '../buttons/DeleteButton';
import EditButton from '../buttons/EditButton';
import UpvoteButton from '../buttons/UpvoteButton';
import DownVoteButton from '../buttons/DownVoteButton';
import * as commentActions from '../../actions/';

class PostComment extends Component {

  onCommentDelete = (comment) => {
    console.log("comment", comment)
    let parentId = comment.parentId
    this.props.deleteComment(comment.id, () => {
      this.props.history.push(`/post/${parentId}`)
      this.props.fetchCommentForPost(comment.parentId)
    })
  }

  render() {
    return (
      <div>
        {this.props.comments.map(comment => (
          <div className="comments__comment flex--default" key={comment.id}>
            <div className="comments__comment__profile"></div>
            <div className="comments__comment__text">
              <p>{comment.body}</p>
              {/* <div className="comment-author"><p> by <b>{comment.author}</b> at {formatTimestamp(comment.timestamp)}</p></div> */}
              <div className="comments__comment__controls">
                <div className="control-icon-wrap">
                  <div
                    onClick={() => this.onCommentDelete(comment)}
                    className="button-wrap__icon flex--align-center"
                  >
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
                  <Link
                    to={`/${this.props.category}/${comment.parentId}/${comment.id}/edit`}>
                    <EditButton
                      onClick={() => {
                        this.props.voteComment(comment.id, comment.parentId, "upVote")}}
                      />
                  </Link>
                </div>
                <div className="button-wrap flex--align-center">
                  <div onClick={() => {
                    this.props.voteComment(comment.id, comment.parentId, "upVote")
                  }} className="button-wrap__icon upvote flex--align-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.6 24.7">
                      <path d="M2.5 21.4c0 0.5 0.4 0.8 0.8 0.8 0.5 0 0.8-0.4 0.8-0.8 0-0.5-0.4-0.8-0.8-0.8C2.9 20.6 2.5 20.9 2.5 21.4M24.5 12.3l-2.2 9c-0.4 1.4-1.3 2.4-2.5 2.4l-6.2 0c-1.1 0-1.9-0.4-2.7-0.9 -0.7-0.4-1.3-0.8-2.3-0.8l-0.8 0c-0.2 0-0.4-0.2-0.4-0.4 0-0.2 0.2-0.4 0.4-0.4l0.8 0c1.1 0 1.9 0.4 2.7 0.9 0.7 0.4 1.3 0.8 2.3 0.8l6.2 0c1 0 1.5-0.9 1.7-1.7l2.2-9c0.1-0.5 0.1-0.9-0.1-1.2 -0.2-0.3-0.7-0.4-1.1-0.4l-5.7 0c-0.5 0-0.9-0.1-1.2-0.4l0 1.6c0 2.1-1.6 3.7-3.7 3.7 -0.2 0-0.4-0.2-0.4-0.4 0-0.2 0.2-0.4 0.4-0.4 1.6 0 2.9-1.3 2.9-2.9l0-8.2c0-1.8-1.1-2.9-2.9-2.9 -0.7 0-1.2 0.6-1.2 1.2l0 4.1c0 2.4-1.7 4.3-4.1 4.5l0.1 13.6c0 0.2-0.2 0.4-0.4 0.4l-5.7 0c-0.2 0-0.4-0.2-0.4-0.4L0 8.7c0-0.2 0.2-0.4 0.4-0.4l5.7 0c0.2 0 0.4 0.2 0.4 0.4 0 0.2-0.2 0.4-0.4 0.4l-5.3 0 0.1 14.8 4.9 0L5.7 10.3c0-0.2 0.2-0.4 0.4-0.4 2.1 0 3.7-1.6 3.7-3.7l0-4.1c0-1.1 0.9-2.1 2-2.1 2.3 0 3.7 1.4 3.7 3.7l0 4.9c0 0.7 0.5 1.2 1.2 1.2l5.7 0c0.8 0 1.4 0.2 1.7 0.7C24.6 10.9 24.7 11.6 24.5 12.3"/>
                    </svg>
                  </div>
                </div>
                <div className="button-wrap flex--align-center">
                  <div onClick={() => {
                    this.props.voteComment(comment.id, comment.parentId, "downVote")
                  }} className="button-wrap__icon downvote flex--align-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.7 24.6">
                        <path d="M24.5 11.4l-2.3-9C21.9 0.9 20.9 0 19.7 0l-6.2 0c-1.1 0-1.9 0.5-2.7 0.9 -0.7 0.4-1.3 0.8-2.3 0.8l-0.8 0c-0.2 0-0.4 0.2-0.4 0.4s0.2 0.4 0.4 0.4l0.8 0c1.1 0 1.9-0.5 2.7-0.9 0.7-0.4 1.3-0.8 2.3-0.8l6.2 0c1 0 1.6 0.9 1.8 1.7l2.3 9c0.1 0.5 0.1 0.9-0.1 1.2 -0.2 0.3-0.7 0.4-1.1 0.4l-5.7 0c-1.1 0-2 0.9-2 2.1l0 5.7c0 1.8-1 2.9-2.9 2.9 -0.7 0-1.2-0.6-1.2-1.2l0-4.9c0-2.4-1.8-4.3-4.1-4.5L6.6 0.5c0-0.2-0.2-0.4-0.4-0.4l-5.7 0C0.2 0.1 0 0.3 0 0.5l0.1 15.6c0 0.2 0.2 0.4 0.4 0.4l5.7 0c0.2 0 0.4-0.2 0.4-0.4l0-0.8c0-0.2-0.2-0.4-0.4-0.4 -0.2 0-0.4 0.2-0.4 0.4l0 0.4 -4.9 0L0.8 0.9l4.9 0 0.1 12.7C5.8 13.8 6 14 6.2 14c2.1 0 3.7 1.6 3.7 3.7l0 4.9c0 1.1 0.9 2 2.1 2 2.3 0 3.7-1.4 3.7-3.7l0-5.7c0-0.7 0.5-1.2 1.2-1.2l5.7 0c0.8 0 1.4-0.2 1.7-0.7C24.7 12.8 24.8 12.1 24.5 11.4M3.3 12.4c0.5 0 0.8 0.4 0.8 0.8 0 0.5-0.4 0.8-0.8 0.8 -0.5 0-0.8-0.4-0.8-0.8C2.5 12.8 2.9 12.4 3.3 12.4"/>
                      </svg>
                  </div>
                  <span className="upvote-count" title="Total comment score">
                    {comment.voteScore}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return { posts }
}

export default connect(mapStateToProps, commentActions)(PostComment)
