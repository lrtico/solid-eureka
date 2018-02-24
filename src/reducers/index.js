import * as Types from '../actions/types';
import sortBy from 'sort-by';
import { combineReducers } from 'redux';

function posts (state = [], action) {
  const { post, posts, postId, updatedPost, sortKey } = action
  switch(action.type) {
    case Types.ADD_POST:
      // console.log(post)
    //Return the existing post array with the new post added to it
      return state.concat([post])
    case Types.UPDATE_POST:
      return state.map(post => {
        if (post.id === postId) {
          post = updatedPost
        }
        return post
      })
    case Types.REMOVE_POST:
        return state.filter(post => post.id !== postId)
    case Types.FETCH_POSTS:
      return action.posts.filter(post => !(post.deleted))
    case Types.GET_CATEGORY_POSTS:
      return posts.filter(post => !(post.deleted))
    case Types.VOTE_POST:
      return state.map(post => {
        if (post.id === action.postId) {
          if ( action.option === "upVote" ) {
            post.voteScore += 1
            post.upVoteScore +=1
          }
          if (action.option === "downVote") {
            post.voteScore -= 1
          }
        }
        return post
      })
    case Types.SORT_POST:
      return [].concat(state.sort(sortBy("-"+sortKey)))
    //Any other action types that come in that we don't know what to do with return the existing state
    default :
    return state
  }
}

function categories( state = [], action ) {
  switch (action.type) {
    case Types.FETCH_CATEGORY:
      return action.res.categories
    default:
      return state
  }
}

//Making simple reducers to set initial state
function comments( state = {}, action) {
  const { comments, commentId, parentId, updatedComment } = action
  switch(action.type) {
    case Types.FETCH_COMMENTS:
      return Object.assign({}, state, {[parentId]: comments})
    case Types.VOTE_COMMENT:
      return {
        ...state,
        [parentId]: state[parentId].map(comment => {
          if(comment.id === commentId) {
            comment = updatedComment
          }
          return comment
        })
      }
    case Types.UPDATE_COMMENT:
      return {
        ...state,
        [parentId]: state[parentId].map(comment => {
          if (comment.id === commentId) {
            comment = updatedComment
          }
          return comment
        })
      }
    case Types.ADD_COMMENT:
      return Object.assign({}, state, {[parentId]: comments})
    case Types.DELETE_COMMENT:
      return state
    default:
      return state
  }
}

export default combineReducers({
  posts,
  categories,
  comments
})
