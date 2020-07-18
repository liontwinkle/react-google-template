// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { GoogleApiWrapper } from 'google-maps-react';
//
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from 'react-router-dom';
//
// import * as FullStory from '@fullstory/browser';
// import Header from '../Layout/Header';
// import MainMenu from '../Layout/MainMenu';
// import Footer from '../Layout/Footer';
// import Loader from '../Loader';
// import Signin from '../Auth/Signin';
// import SelectInstanceTeam from '../Auth/SelectInstanceTeam';
// import CreateNewInstance from '../Auth/CreateNewInstance';
// import CompleteTraining from '../Auth/CompleteTraining';
// import SessionExpiryModal from '../Auth/SessionExpiryModal';
// import Home from '../Home';
// import NotFound from '../NotFound';
//
// import * as routes from '../../constants/routes';
// import * as loginSteps from '../../constants/login_steps';
//
// function App({
//   loading,
//   teamFg,
//   isLoading,
//   authUser,
//   loginStep,
//   sessionData,
//   isMainMenuOpened,
//   isNavbarMenuOpened,
//   isSessionExpiryModalOpened,
// }) {
//   if (loading && authUser) return <Loader />;
//
//   if (authUser) {
//     FullStory.event(authUser.userId, {
//       displayName: authUser.username,
//       email: authUser.email,
//     });
//   }
//   return (
//     // <Router basename={process.env.PUBLIC_URL}>
//     //   <Header
//     //     authUser={authUser}
//     //     loginStep={loginStep}
//     //     isMainMenuOpened={isMainMenuOpened}
//     //     isNavbarMenuOpened={isNavbarMenuOpened}
//     //   />
//     //   <Switch>
//     //     <Route exact path={routes.HOME}>
//     //       {authUser ? (
//     //         loginStep ? (
//     //           loginStep === loginSteps.CREATE_NEW_INSTANCE ? (
//     //             <Redirect to={routes.CREATE_NEW_INSTANCE} />
//     //           ) : loginStep === loginSteps.COMPLETE_TRAINING ? (
//     //             <Redirect to={routes.COMPLETE_TRAINING} />
//     //           ) : (
//     //             <div className="mail-wrapper">
//     //               {!isLoading && (
//     //                 <MainMenu
//     //                   userId={authUser.id}
//     //                   eventId={sessionData.id_event}
//     //                 />
//     //               )}
//     //               <Home />
//     //             </div>
//     //           )
//     //         ) : (
//     //           teamFg ? (
//     //             <Redirect to={routes.SELECT_INSTANCE_TEAM} />
//     //           ) : (
//     //             <Redirect to={routes.SIGNIN} />
//     //           )
//     //         )
//     //       ) : (
//     //         <Redirect to={routes.SIGNIN} />
//     //       )}
//     //     </Route>
//     //     <Route exact path={routes.SIGNIN}>
//     //       {authUser ? (
//     //         loginStep ? (
//     //           loginStep === loginSteps.CREATE_NEW_INSTANCE ? (
//     //             <Redirect to={routes.CREATE_NEW_INSTANCE} />
//     //           ) : loginStep === loginSteps.COMPLETE_TRAINING ? (
//     //             <Redirect to={routes.COMPLETE_TRAINING} />
//     //           ) : (
//     //             <Redirect to={routes.HOME} />
//     //           )
//     //         ) : (
//     //           teamFg ? (
//     //             <Redirect to={routes.SELECT_INSTANCE_TEAM} />
//     //           ) : (
//     //             <Redirect to={routes.SIGNIN} />
//     //           )
//     //         )
//     //       ) : (
//     //         <Signin />
//     //       )}
//     //     </Route>
//     //     <Route exact path={routes.SELECT_INSTANCE_TEAM}>
//     //       {!isLoading && authUser ? (
//     //         !loginStep ? (
//     //           <SelectInstanceTeam
//     //             authUser={authUser}
//     //             sessionData={sessionData}
//     //           />
//     //         ) : loginStep === loginSteps.CREATE_NEW_INSTANCE ? (
//     //           <Redirect to={routes.CREATE_NEW_INSTANCE} />
//     //         ) : loginStep === loginSteps.COMPLETE_TRAINING ? (
//     //           <Redirect to={routes.COMPLETE_TRAINING} />
//     //         ) : (
//     //           <Redirect to={routes.HOME} />
//     //         )
//     //       ) : (
//     //         <Redirect to={routes.SIGNIN} />
//     //       )}
//     //     </Route>
//     //     <Route exact path={routes.CREATE_NEW_INSTANCE}>
//     //       {authUser ? (
//     //         !loginStep ? (
//     //           <Redirect to={routes.SELECT_INSTANCE_TEAM} />
//     //         ) : loginStep === loginSteps.CREATE_NEW_INSTANCE ? (
//     //           <CreateNewInstance />
//     //         ) : loginStep === loginSteps.COMPLETE_TRAINING ? (
//     //           <Redirect to={routes.COMPLETE_TRAINING} />
//     //         ) : (
//     //           <Redirect to={routes.HOME} />
//     //         )
//     //       ) : (
//     //         <Redirect to={routes.SIGNIN} />
//     //       )}
//     //     </Route>
//     //     <Route exact path={routes.COMPLETE_TRAINING}>
//     //       {authUser ? (
//     //         !loginStep ? (
//     //           <Redirect to={routes.SELECT_INSTANCE_TEAM} />
//     //         ) : loginStep === loginSteps.COMPLETE_TRAINING ? (
//     //           <CompleteTraining />
//     //         ) : loginStep === loginSteps.CREATE_NEW_INSTANCE ? (
//     //           <Redirect to={routes.CREATE_NEW_INSTANCE} />
//     //         ) : (
//     //           <Redirect to={routes.HOME} />
//     //         )
//     //       ) : (
//     //         <Redirect to={routes.SIGNIN} />
//     //       )}
//     //     </Route>
//     //     <Route component={NotFound} />
//     //   </Switch>
//     //   <Footer />
//     //   {loginStep === loginSteps.FINISHED && <div className="backdrop" />}
//     //   {authUser && <SessionExpiryModal show={isSessionExpiryModalOpened} />}
//     // </Router>
//   );
// }
//
// App.propTypes = {
//   loginStep: PropTypes.string,
//   authUser: PropTypes.object,
//   sessionData: PropTypes.object,
//   loading: PropTypes.bool.isRequired,
//   isLoading: PropTypes.bool,
//   teamFg: PropTypes.bool,
//   isMainMenuOpened: PropTypes.bool.isRequired,
//   isNavbarMenuOpened: PropTypes.bool.isRequired,
//   isSessionExpiryModalOpened: PropTypes.bool.isRequired,
// };
//
// App.defaultProps = {
//   authUser: null,
//   loginStep: null,
//   sessionData: null,
//   isLoading: null,
//   teamFg: null,
// };
//
// const mapStateToProps = (store) => ({
//   loading: store.sessionData.loading,
//   teamFg: store.sessionData.teamFg,
//   authUser: store.sessionData.authUser,
//   loginStep: store.sessionData.loginStep,
//   sessionData: store.sessionData.sessionData,
//   isLoading: store.themeConfigData.isLoading,
//   isMainMenuOpened: store.themeConfigData.isMainMenuOpened,
//   isNavbarMenuOpened: store.themeConfigData.isNavbarMenuOpened,
//   isSessionExpiryModalOpened: store.themeConfigData.isSessionExpiryModalOpened,
// });
//
// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAQHX0rJGGbt6qbf0P5587hwE09u2Ggdm8',
// })(connect(mapStateToProps)(App));
import React from 'react';

function App() {
  return (
    <div>testing</div>
  );
}

export default App;
