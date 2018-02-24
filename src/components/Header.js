import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/category';
import MaterialIcon from 'react-google-material-icons';
import Logo from './Logo';

class Header extends Component {

  onShowSelect = (event) => {
    const options = document.getElementById("select_options")
    let x = event.clientX
		let y = event.clientY
    // console.log("show select", options)
    // console.log("position x", x)
    options.style.display = "block"
    options.style.left = x + "px"
    options.style.top = y + "px"
  }

  onCategoryClick = (event) => {
    event.stopPropagation()
    const options = document.getElementById("select_options")
    options.style.display = "none"
  }

  static propTypes = {
    posts: PropTypes.array,
    categories: PropTypes.array,
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    const { categories } = this.props
    return (
      <header>
        <nav className="flex--vertical-center">
          <Logo />
          <div
            id="select_trigger"
            className="button--white select flex--align-center"
            onClick={this.onShowSelect}>
            <span className="select__value">categories</span>
            <MaterialIcon
              icon="keyboard_arrow_down"
              size={30}/>
            <div
              id="select_options"
              className="select__menu-wrapper"
              onClick={this.onCategoryClick}>
  							<div className="select__menu">
  								<div className="select__menu__content">
                    <Link to="/">
                      <span className="select__option">show all</span>
                    </Link>
                    {categories && categories.map(category => (
                      <Link key={category.name} to={`/${category.path}`}>
                        <span className="select__option">{category.name}</span>
                      </Link>
                    ))}
  								</div>
  							</div>
						</div>
          </div>
          <Link
            to="/new"
            className="button--circ-green flex--align-center">
            <MaterialIcon
               icon="add"
               size={45}/>
          </Link>
        </nav>
        <div className="header-fade"></div>
      </header>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories
  }
}

export default withRouter(connect(mapStateToProps, {
  fetchCategories
})(Header))
