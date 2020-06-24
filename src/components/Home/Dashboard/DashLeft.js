import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import axios from 'axios'

import Loader from '../../Loader'
import {
  setSessionExpiryModalState,
  setMainMenuState,
  setLoadingFg
} from '../../../redux/action/themeConfigs'
import { resetSessionData } from '../../../redux/action/session'


function DashLeft ({
  setSessionExpiryModalState,
  sessionData,
  setLoadingFg,
  isLoading,
  resetSessionData
}) {
  const [info, setInfo] = useState(false)

  useEffect(() => {
    const getInfoHandler = async () => {
      setLoadingFg(true)
      try {
        const { data } = await axios.get(
          process.env.REACT_APP_API +
            '/auth/info/' +
            sessionData.id_instance +
            '/' +
            sessionData.id_team +
            '/' +
            sessionData.id_event
        )
        // set instances data
        setInfo(data.info)
        setLoadingFg(false)
      } catch (e) {
        // if unauthorized
        if (e.response.status !== 400) {
          // open session expiry modal
          setSessionExpiryModalState(true)
          setLoadingFg(false)
          return
        }
        console.log('Unexpected error: Dashboard:getInfoHandler', e)
      }
    }
    getInfoHandler()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) return <Loader />

  return (
    <>
      <div className='alert alert-secondary m-3' role='alert'>
        <strong>Event: </strong> {info.event_title} (ID: {sessionData.id_event}{' '}
        )
        <br />
        <strong>Instance: </strong> {info.instance_title} -{' '}
        {info.instance_shortname} (ID: {sessionData.id_instance})
        <br />
        <strong>Team: </strong> {info.team_title} (ID: {sessionData.id_team})
        <br />
        <strong>User: </strong> {info.user_first_name} {info.user_last_name} (
        {info.user_role})
      </div>
    </>
  )
}

DashLeft.propTypes = {
  setSessionExpiryModalState: PropTypes.func.isRequired,
  setMainMenuState: PropTypes.func.isRequired,
  setLoadingFg: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  resetSessionData: PropTypes.func.isRequired,
  sessionData: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setSessionExpiryModalState,
      setMainMenuState,
      setLoadingFg,
      resetSessionData
    },
    dispatch
  )

const mapStateToProps = store => ({
  sessionData: store.sessionData.sessionData,
  isLoading: store.themeConfigData.isLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(DashLeft)
