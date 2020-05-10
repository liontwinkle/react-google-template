import React, { Component } from 'react';
import { connect } from 'react-redux';
import WidePane from '../../layout/WidePane';

class Dashboard extends Component {
  render() {
    return (
      <WidePane animateClass={this.props.animateClass}>
        <div className="alert alert-secondary m-3 wd-300" role="alert">
          <strong>Event:</strong> _ (_)
		      <br /><strong>Instance:</strong> _ - _ (_)
		      <br /><strong>Team:</strong> _ (_)
		      <br /><strong>User:</strong> {this.props.userData.user_first_name} {this.props.userData.user_last_name} ({this.props.userData.user_role})
	      </div>
      </WidePane>
    );
  }
};

const mapStateToProps = state => {
  return {
    userData: state.auth.userData
  };
};

export default connect(mapStateToProps)(Dashboard);