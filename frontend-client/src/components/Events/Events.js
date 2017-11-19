import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import Loader from '../Loader/Loader';
import './Events.css'
const dummyEvents = [
  {
    "_id": "5a10c65f727a7cf6a89d23ff",
    "userId": 3,
    "title": "nulla nostrud enim",
    "dateCreated": "2016-02-01T01:38:27"
  },
  {
    "_id": "5a10c65fcf3f591c33eee26a",
    "userId": 1,
    "title": "quids utjlj esfdfsdt",
    "dateCreated": "2017-10-08T07:54:53"
  },
  {
    "_id": "5a10c65fbc57d0bd771aaed7",
    "userId": 2,
    "title": "ullamco utjlj elit",
    "dateCreated": "2017-06-29T07:13:17"
  },
  {
    "_id": "5a10c65fcbf108ed0010ed43",
    "userId": 2,
    "title": "quis occaecat aliquip",
    "dateCreated": "2017-04-04T10:42:44"
  }
];
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null,
      userId: this.props.userId
    };

    
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({
        events: dummyEvents
      })
    }, 500)
    // axios.get(`http://localhost:3030/events/${this.state.userId}`)
    //   .then(({data}) => {
    //     this.setState({
    //       events: data
    //     });
    //   })
    //   .catch(err => {
    //     console.log('err', err);
    //   });
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
      console.log('eventCreated', moment(eventCreated).fromNow(true));
      const fromNow = now.diff(eventCreated, 'days');
      console.log(fromNow);
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
