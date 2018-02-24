import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { createPost, removePost } from './actions'
import Header from './Header';
import Post from './Post';
import NewPost from './components/post/NewPost';
import ToggleButton from './components/buttons/ToggleButton';
import Create from './Create';
import PostDetail from './PostDetail'
import MaterialIcon from 'react-google-material-icons';
import ScrollTop from './ScrollTop';
import Logo from './components/Logo';

class App extends Component {
  static propTypes = {
    posts: PropTypes.array,
    categories: PropTypes.array,
  }

  scrollIt = () => {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': 0,
      });
    }

  render() {
    // console.log("posts", this.props.posts);
    return (
      <div>
          <Route exact path="/" render={() => (
            <div className="App">
              <Header />
              <div className="header-offset"></div>
              <div className="sort-buttons flex--default">
                <ToggleButton label="by most popular" />
                <ToggleButton label="by newest" />
              </div>
              <Post
                posts={this.props.posts}
                onDeletePost={this.handleDelete} />
              <ScrollTop scrollToTheTop={this.scrollIt} />
            </div>
          )}/>
          <Route path="/create" render={() =>
            <NewPost />
          }/>
          <Route path="/detail" render={() => (
            <div className="App">
              <header>
                <nav className="flex--vertical-center">
                  <Logo />
                  <div className="button--white flex--align-center">
                    <span>categories</span>
                    <MaterialIcon
                      icon="keyboard_arrow_down"
                      size={30}/>
                  </div>
                  <Link
                    to="/"
                    className="button--circ-green flex--align-center">
                    <MaterialIcon
                       icon="arrow_back"
                       size={45}/>
                  </Link>
                </nav>
                <div className="header-fade"></div>
              </header>
              <div className="header-offset"></div>
              <PostDetail />
              <ScrollTop scrollToTheTop={this.scrollIt} />
            </div>
          )}/>
      </div>
    );
  }
}
//This function maps our Redux state to component props
function mapStateToProps ({ posts, comments }) {
  return { //an obj with a post and comments property on it
    posts,
    comments,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createPost: (data) => dispatch(createPost(data)),
    removePost: (data) => dispatch(removePost(data)),
  }
}

//Whatever we return to this component will pass to this component as long as
//we pass 'mapStateToProps' as the first arg to connect().
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
