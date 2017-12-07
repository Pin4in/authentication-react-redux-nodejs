import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';

class Home extends Component {
  render() {
    const title = 'Home page'
    return (
      <div className="container">
        <PageTitle title = {title}/>
     </div>
    );
  }
}

export default withRouter(Home);
