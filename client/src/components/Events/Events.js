import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import moment from 'moment';
import Loader from '../Loader/Loader';
import Event from '../Event/Event';
import './Events.css'

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null,
      userId: this.props.userId
    };

    
  }
  componentWillMount() {
    this.props.fetchEvents({id: 1});
  }

  deleteEvent(eventName) {
    const newEvents = this.state.events;
    for(let i = 0; i < newEvents.length; i++) {
      if(newEvents[i].name === eventName) {
        newEvents.splice(i, 1);
        this.setState({
          events: newEvents
        })
      }
    }

    
  }
  render() {
    if (!this.props.events) {
      return <Loader />;
    }
    const events = this.props.events.map((event, i) => {
      const eventCreated = moment(new Date(event.dateCreated));
      const now  = moment(new Date());
      const fromNow = now.diff(eventCreated, 'days');
      return (
        <li key={i}>
          <Event event={event} fromNow={fromNow}/>
        </li>
      )
    });

    return (
      <ul className="row events">{events}</ul>
    );
  }
}

function mapStateToProps(state) {
  return { events: state.events.events };
}
export default connect(mapStateToProps, actions)(Events);
