import React, { Component } from 'react';
import Events from '../Events/Events';
import PageTitle from '../PageTitle/PageTitle';

class EventsPage extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const title = 'Events'
    const userId = 1
    return (
      <div className="container">
        <PageTitle title = {title}/>
        <Events userId = {userId} />
     </div>
    );
  }
}

export default EventsPage;
