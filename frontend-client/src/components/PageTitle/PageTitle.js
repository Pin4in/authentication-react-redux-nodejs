import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './PageTitle.css'

class PageTitle extends Component {
  static propTypes = {
    title: PropTypes.string
  }
  static defaultProps = {
    title: 'Default title'
  }
  render() {
    return (
      <h1 className="page-title">{this.props.title}</h1>
    );
  }
}

export default PageTitle;
