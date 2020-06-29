import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import DashboardLeft from './Dashboard/DashLeft'
import DashContent from './Dashboard/DashContent'

import IncidentLeft from './IncidentLogging/IncidentLeft'
import IncidentContent from './IncidentLogging/IncidentContent'
import TaskBar from "../common/TaskBar";

import './style.scss'

function Home ({ viewIndex, isLoading }) {
  // todo here need to components selector
  const LeftBar = () => {
    switch (viewIndex) {
      case 2:
        return <IncidentLeft />
      default:
        return <DashboardLeft />
    }
  };

  const ContentBody = () => {
    switch (viewIndex) {
      case 2:
        return <IncidentContent />
      default:
        return <DashContent />
    }
  };

  return (
    <div className='mail-body'>
      <div className='mail-group'>{LeftBar()}</div>
      <div className='mail-content'>
        {ContentBody()}
        <div className='mail-content__footer'>
          <TaskBar />
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  viewIndex: PropTypes.number,
};

Home.defaultProps = {
  viewIndex: null
};

const mapStateToProps = store => ({
  viewIndex: store.dashboardData.viewIndex,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)
