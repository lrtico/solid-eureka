import React, { Component } from 'react';
import { connect } from 'react-redux'
import { formatTimestamp } from '../../utils/Helpers'
import { Link } from 'react-router-dom';
import * as actions from '../../actions/'
import UpvoteButton from './components/buttons/UpvoteButton';
import DownVoteButton from './components/buttons/DownVoteButton';
import EditButton from './components/buttons/EditButton';

class Post extends Component {
  componentDidMount() {
    this.props.fetchCommentForPost(this.props.post.id)
  }

  onPostDelete = () => {
    const id = this.props.match.params.postId
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const { post, comments, votePost, fetchAllPosts } = this.props

    return (
      <section className="post">
        {post && (
          <article key={post.id} className="post-preview">
            <p className="post__date">{post.date}</p>
            <p className="post__author"><em>{post.author}</em></p>
            <Link to="/detail">
              <div className="post_preview">
                <p>{post.title}</p>
              </div>
            </Link>
            <div className="flex--vertical-center">
              <span className="category-tag">Sports</span>
              <div className="control-icon-wrap">
                <div onClick={() => this.props.onDeletePost(post)} className="button-wrap__icon flex--align-center">
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
              <Link to={`/${post.category}/${post.id}/edit`}>
                <div className="control-icon-wrap">
                  <EditButton />
                </div>
              </Link>
              <div className="button-wrap flex--align-center">
                <UpvoteButton />
                <span className="upvote-count">{post.upvoteScore}</span>
              </div>
              <div className="button-wrap flex--align-center">
                <DownVoteButton />
                <span className="downvote-count">{post.downvoteScore}</span>
              </div>
            </div>
          </article>
        )}
      </section>
    );
  }
}

export default Post;
