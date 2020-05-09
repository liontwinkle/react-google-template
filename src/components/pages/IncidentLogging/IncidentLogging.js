import React, { Component } from 'react';
import PageAnimator from '../../../hoc/PageAnimator';

class IncidentLogging extends Component {
  render() {
    return (
      <PageAnimator animateClass={this.props.animateClass}>
        <div className="main-group">
          IncidentLogging
        </div>
        <div className="main-content">
          RHS Content
        </div>
      </PageAnimator>
    );
  }
};

export default IncidentLogging;