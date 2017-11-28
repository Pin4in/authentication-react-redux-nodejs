import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import Loader from '../Loader/Loader';
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
    axios.get(`http://localhost:3030/events`)
      .then(({data}) => {
        this.setState({
          events: data
        });
      })
      .catch(err => {
        console.log('err', err);
      });
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
    if (!this.state.events) {
      return <Loader />;
    }

    const events = this.state.events.map((event, i) => {
      const eventCreated = moment(new Date(event.dateCreated));
      const now  = moment(new Date());
      const fromNow = now.diff(eventCreated, 'days');
      return (
        <li key={i}>
          <div className="event">
            <h2>{event.title}</h2>
            <p>{fromNow}</p>
            <div className="event-actions">
              <button>Edit</button>
              <button onClick={this.deleteEvent.bind(this, event.name)}>Delete</button>
            </div>
          </div>
        </li>
      );
    })

    return (
      <ul className="row events">{events}</ul>
    );
  }
}

export default Events;
