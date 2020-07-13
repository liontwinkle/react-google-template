import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Modal, Button } from 'react-bootstrap';

import { setSessionExpiryModalState } from '../../redux/action/themeConfigs';
import { resetSessionData } from '../../redux/action/session';

function SessionExpiryModal({
  resetSessionData,
  setSessionExpiryModalState,
  show,
}) {
  const signInHandler = () => {
    // reste session data
    resetSessionData();
    // will redirect to required route related with sessions unset
    // close session expiry modal
    setSessionExpiryModalState(false);
  };

  const onHideHandler = () => {
    // close session expiry modal
    setSessionExpiryModalState(false);
  };

  return (
    <Modal show={show} onHide={onHideHandler} aria-labelledby="session-expiry-modal-title" centered>
      <Modal.Header closeButton>
        <Modal.Title id="session-expiry-modal-title">
          Please Sign In again
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>To keep your work secure, your CommandPost session has finished. To log back in, please refresh your browser, or hit Log In below.</p>
        <p>If you were in the middle of typing something, please close this message, copy the text, and then refresh.</p>
        <p>We apologize for interrupting your flow. Thanks for helping us keep CommandPost secure!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHideHandler} variant="secondary">Close</Button>
        <Button onClick={signInHandler}>Sign In</Button>
      </Modal.Footer>
    </Modal>
  );
}
SessionExpiryModal.propTypes = {
  show: PropTypes.bool.isRequired,
  resetSessionData: PropTypes.func.isRequired,
  setSessionExpiryModalState: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  resetSessionData,
  setSessionExpiryModalState,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SessionExpiryModal);
