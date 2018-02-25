import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Route, withRouter, Switch } from 'react-router-dom';
import { sortPost } from '../actions/';
import { fetchCategories } from '../actions/category';
import Header from './Header';
import ListPosts from './ListPosts';
import NewPost from './post/NewPost';
import PostDetail from './post/PostDetail';
import EditPost from './post/EditPost';
import ToggleButton from './buttons/ToggleButton';
import EditComment from './comment/EditComment';
import NewComment from './comment/NewComment';
import NotFound from './NotFound';
import MaterialIcon from 'react-google-material-icons';
import ScrollTop from '../ScrollTop';
import Logo from './Logo';


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

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    const { categories, sortPost } = this.props
    console.log("categories", this.props.categories);
    return (
      <div className="App">
        <Header />
        <div className="header-offset"></div>
        <div className="sort-buttons flex--default">
          <ToggleButton>
            <button className="button__toggle"
              onClick={() => sortPost("voteScore")}>
              by most popular
            </button>
          </ToggleButton>
          <ToggleButton>
            <button className="button__toggle"
              onClick={() => sortPost("timestamp")}>
              by newest
            </button>
          </ToggleButton>
        </div>

      <Switch>
        <Route exact path="/" component={ListPosts} />
        <Route exact path="/new" component={NewPost} />
        <Route exact path="/:category" component={ListPosts} />
        <Route exact path="/:category/:postId" component={PostDetail} />
        <Route exact path="/:category/:postId/edit" component={EditPost} />
        <Route exact path="/:category/:postId/comment" component={NewComment} />
        <Route exact path="/:category/:postId/:commentId/edit" component={EditComment} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
    )
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories
  }
}

export default withRouter(connect(mapStateToProps, {
  sortPost,
  fetchCategories
})(App))
