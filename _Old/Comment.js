import React, { Component } from 'react'
import './App.css'
import DeleteButton from './components/buttons/DeleteButton'
import EditButton from './components/buttons/EditButton'
import UpvoteButton from './components/buttons/UpvoteButton'
import DownVoteButton from './components/buttons/DownVoteButton'

class Comment extends Component {
  state = {
    upvoteScore: 7342,
    downvoteScore: 13,
  }

  render() {
    return (
      <div className="comments__comment flex--default">
        <div className="comments__comment__profile"></div>
        <div className="comments__comment__text">
          <p>{this.props.comment1}</p>
          <p>{this.props.comment2}</p>
          <div className="comments__comment__controls">
            <div className="control-icon-wrap">
              <DeleteButton />
            </div>
            <div className="control-icon-wrap">
              <EditButton />
            </div>
            <div className="button-wrap flex--align-center">
              <UpvoteButton />
              <span className="upvote-count">{this.state.upvoteScore}</span>
            </div>
            <div className="button-wrap flex--align-center">
              <DownVoteButton />
              <span className="downvote-count">{this.state.downvoteScore}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment;
