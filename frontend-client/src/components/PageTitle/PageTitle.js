import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './PageTitle.css'

class PageTitle extends Component {
  static defaultProps = {
    title: 'Default title'
  }
  static PropTypes = {
    title: PropTypes.string
  }
  render() {
    return (
      <h1 className="page-title">{this.props.title}</h1>
    );
  }
}

export default PageTitle;
