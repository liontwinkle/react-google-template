import React, { useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Header from '../Layout/Header'
import MainMenu from '../Layout/MainMenu'
import Footer from '../Layout/Footer'
import Loader from '../Loader'
import Signin from '../Auth/Signin'
import SelectInstanceTeam from '../Auth/SelectInstanceTeam'
import CreateNewInstance from '../Auth/CreateNewInstance'
import CompleteTraining from '../Auth/CompleteTraining'
import SessionExpiryModal from '../Auth/SessionExpiryModal'
import Home from '../Home'
import NotFound from '../NotFound'
import FullStory, { FullStoryAPI } from 'react-fullstory'

import { setSessionExpiryModalState } from '../../redux/action/themeConfigs'
import { verifyToken, resetSessionData } from '../../redux/action/session'

import * as routes from '../../constants/routes'
import * as loginSteps from '../../constants/login_steps'

import './App.css'
import './Layout.css'

function App ({
  loading,
  isLoading,
  authUser,
  loginStep,
  sessionData,
  isMainMenuOpened,
  isNavbarMenuOpened,
  isSessionExpiryModalOpened,
  resetSessionData,
  verifyToken,
  setSessionExpiryModalState
}) {
  const authenticate = useCallback(async () => {
    // verifyToken().catch(e => {
    //   // reset all sessions
    //   if (e.response.status === 401) {
    //     setSessionExpiryModalState(true)
    //   } else {
    //     resetSessionData()
    //   }
    // })
  }, [])

  useEffect(() => {
    authenticate()
  }, [authenticate])

  if (authUser) {
    // Identify method
    FullStoryAPI('identify', authUser.userId, {
      userName: authUser.userName,
      email: authUser.email
    })
  }

  if (loading && authUser) return <Loader />

  if (loading) return false
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <FullStory
        org='W49VA'
        script='edge.fullstory.com/s/fs.js'
        debug={false}
        host='fullstory.com'
        namespace='FS'
      />
      <Header
        authUser={authUser}
        loginStep={loginStep}
        isMainMenuOpened={isMainMenuOpened}
        isNavbarMenuOpened={isNavbarMenuOpened}
      />
      <Switch>
        <Route exact path={routes.HOME}>
          {authUser ? (
            loginStep ? (
              loginStep === loginSteps.CREATE_NEW_INSTANCE ? (
                <Redirect to={routes.CREATE_NEW_INSTANCE} />
              ) : loginStep === loginSteps.COMPLETE_TRAINING ? (
                <Redirect to={routes.COMPLETE_TRAINING} />
              ) : (
                <div className='mail-wrapper'>
                  {!isLoading && (
                    <MainMenu
                      userId={authUser.id}
                      eventId={sessionData.id_event}
                    />
                  )}
                  <Home />
                </div>
              )
            ) : (
              <Redirect to={routes.SELECT_INSTANCE_TEAM} />
            )
          ) : (
            <Redirect to={routes.SIGNIN} />
          )}
        </Route>
        <Route exact path={routes.SIGNIN}>
          {authUser ? (
            loginStep ? (
              loginStep === loginSteps.CREATE_NEW_INSTANCE ? (
                <Redirect to={routes.CREATE_NEW_INSTANCE} />
              ) : loginStep === loginSteps.COMPLETE_TRAINING ? (
                <Redirect to={routes.COMPLETE_TRAINING} />
              ) : (
                <Redirect to={routes.HOME} />
              )
            ) : (
              <Redirect to={routes.SELECT_INSTANCE_TEAM} />
            )
          ) : (
            <Signin />
          )}
        </Route>
        <Route exact path={routes.SELECT_INSTANCE_TEAM}>
          {authUser ? (
            !loginStep ? (
              <SelectInstanceTeam
                authUser={authUser}
                sessionData={sessionData}
              />
            ) : loginStep === loginSteps.CREATE_NEW_INSTANCE ? (
              <Redirect to={routes.CREATE_NEW_INSTANCE} />
            ) : loginStep === loginSteps.COMPLETE_TRAINING ? (
              <Redirect to={routes.COMPLETE_TRAINING} />
            ) : (
              <Redirect to={routes.HOME} />
            )
          ) : (
            <Redirect to={routes.SIGNIN} />
          )}
        </Route>
        <Route exact path={routes.CREATE_NEW_INSTANCE}>
          {authUser ? (
            !loginStep ? (
              <Redirect to={routes.SELECT_INSTANCE_TEAM} />
            ) : loginStep === loginSteps.CREATE_NEW_INSTANCE ? (
              <CreateNewInstance />
            ) : loginStep === loginSteps.COMPLETE_TRAINING ? (
              <Redirect to={routes.COMPLETE_TRAINING} />
            ) : (
              <Redirect to={routes.HOME} />
            )
          ) : (
            <Redirect to={routes.SIGNIN} />
          )}
        </Route>
        <Route exact path={routes.COMPLETE_TRAINING}>
          {authUser ? (
            !loginStep ? (
              <Redirect to={routes.SELECT_INSTANCE_TEAM} />
            ) : loginStep === loginSteps.COMPLETE_TRAINING ? (
              <CompleteTraining />
            ) : loginStep === loginSteps.CREATE_NEW_INSTANCE ? (
              <Redirect to={routes.CREATE_NEW_INSTANCE} />
            ) : (
              <Redirect to={routes.HOME} />
            )
          ) : (
            <Redirect to={routes.SIGNIN} />
          )}
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
      {loginStep === loginSteps.FINISHED && <div className='backdrop'></div>}
      {authUser && <SessionExpiryModal show={isSessionExpiryModalOpened} />}
    </Router>
  )
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  authUser: PropTypes.object,
  loginStep: PropTypes.string,
  sessionData: PropTypes.object,
  isMainMenuOpened: PropTypes.bool.isRequired,
  isNavbarMenuOpened: PropTypes.bool.isRequired,
  isSessionExpiryModalOpened: PropTypes.bool.isRequired,
  verifyToken: PropTypes.func.isRequired,
  resetSessionData: PropTypes.func.isRequired,
  setSessionExpiryModalState: PropTypes.func.isRequired
}

App.defaultProps = {
  authUser: null,
  sessionData: null,
  loginStep: null
}

const mapStateToProps = store => ({
  loading: store.sessionData.loading,
  isLoading: store.themeConfigData.isLoading,
  authUser: store.sessionData.authUser,
  loginStep: store.sessionData.loginStep,
  sessionData: store.sessionData.sessionData,
  isMainMenuOpened: store.themeConfigData.isMainMenuOpened,
  isNavbarMenuOpened: store.themeConfigData.isNavbarMenuOpened,
  isSessionExpiryModalOpened: store.themeConfigData.isSessionExpiryModalOpened
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      verifyToken,
      resetSessionData,
      setSessionExpiryModalState
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(App)
