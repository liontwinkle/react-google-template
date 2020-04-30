import React, { Component } from 'react';

class IncidentLogging extends Component {
  render() {
    return (
      <div className={`${this.props.animateClass}`}>
        <div className="main-group">
          IncidentLogging
        </div>
        <div className="main-content">
          RHS Content
        </div>
      </div>
    );
  }
};

export default IncidentLogging;