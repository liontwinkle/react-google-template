import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import DashboardLeft from './Dashboard/DashLeft'
import DashContent from './Dashboard/DashContent'

import IncidentLeft from './IncidentLogging/IncidentLeft'
import IncidentContent from './IncidentLogging/IncidentContent'
import TaskBar from "../common/TaskBar";
import axios from "axios";
import Loader from "../Loader";


import {
  setSessionExpiryModalState,
  setMainMenuState,
  setLoadingFg
} from '../../redux/action/themeConfigs';
import { resetSessionData, verifyToken } from '../../redux/action/session';

import './style.scss'

function Home ({
  viewIndex,
  sessionData,
  setSessionExpiryModalState,
  setLoadingFg,
  verifyToken,
  resetSessionData,
  isLoading }) {

  const [info, setInfo] = useState(false);

  useEffect(() => {
    const getInfoHandler = async () => {
      setLoadingFg(true);
      try {
        verifyToken()
            .then(async () => {
              const { data } = await axios.get(
                  process.env.REACT_APP_API +
                  '/auth/info/' +
                  sessionData.id_instance +
                  '/' +
                  sessionData.id_team +
                  '/' +
                  sessionData.id_event
              );
              setInfo(data.info);
              setLoadingFg(false)
            })
            .catch(e => {
              if (e.response.status === 401) {
                setSessionExpiryModalState(true)
              } else {
                resetSessionData()
              }
            })
      } catch (e) {
        // if unauthorized
        if (e.response.status !== 400) {
          // open session expiry modal
          setSessionExpiryModalState(true);
          setLoadingFg(false);
          return
        }
        console.log('Unexpected error: Dashboard:getInfoHandler', e)
      }
    };
    getInfoHandler()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loader />;
  // todo here need to components selector
  const LeftBar = () => {
    switch (viewIndex) {
      case 2:
        return <IncidentLeft />
      default:
        return <DashboardLeft info={info} sessionData={sessionData} />
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
  /**
   * The main component for the Body of site
   * It consists of two parts; left bar and content.
   */
  return (
    <div className='main-body'>
      <div className='main-group'>{LeftBar()}</div>
      <div className='main-content'>
        {ContentBody()}
        <div className='main-content__footer'>
          <TaskBar />
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  viewIndex: PropTypes.number,
  verifyToken: PropTypes.func.isRequired,
  setSessionExpiryModalState: PropTypes.func.isRequired,
  setMainMenuState: PropTypes.func.isRequired,
  setLoadingFg: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  resetSessionData: PropTypes.func.isRequired,
  sessionData: PropTypes.object.isRequired
};

Home.defaultProps = {
  viewIndex: null
};

const mapStateToProps = store => ({
  viewIndex: store.dashboardData.viewIndex,
  sessionData: store.sessionData.sessionData,
  isLoading: store.themeConfigData.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setSessionExpiryModalState,
  setMainMenuState,
  setLoadingFg,
  resetSessionData,
  verifyToken
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)
