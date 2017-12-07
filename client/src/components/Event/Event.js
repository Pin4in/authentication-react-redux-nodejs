import React, { Component } from 'react';

class Event extends Component {
  render() {
    return (
      <div className="event">
        <h2>{this.props.event.title}</h2>
        <p>{this.props.fromNow}</p>
        <div className="event-actions">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    );
  }
}

export default Event;
