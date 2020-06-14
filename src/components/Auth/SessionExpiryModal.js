import React from 'react';
import { useDispatch } from 'redux-react-hook';
import * as actions from '../../constants/action_types';
import { Modal, Button } from 'react-bootstrap';

function SessionExpiryModal(props) {
    const dispatch = useDispatch();

    const signInHandler = (e) => {
        // unset authUser data
        dispatch({ type: actions.SET_AUTH_USER, authUser: null });
        // unset loginStep data
        dispatch({ type: actions.SET_LOGIN_STEP, loginStep: false });
        // unset sessionData data
        dispatch({ type: actions.SET_SESSION_DATA, sessionData: null });
        // will redirect to required route related with sessions unset
        // close session expiry modal
        dispatch({ type: actions.SET_SESSION_EXPIRY_MODAL_STATE, isSessionExpiryModalOpened: false });
    }

    const onHideHandler = (e) => {
        // close session expiry modal
        dispatch({ type: actions.SET_SESSION_EXPIRY_MODAL_STATE, isSessionExpiryModalOpened: false });
    }

    return (
        <Modal show={props.show} onHide={onHideHandler} aria-labelledby="session-expiry-modal-title" centered >
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

export default SessionExpiryModal;
