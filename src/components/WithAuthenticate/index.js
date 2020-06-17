import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import axios from 'axios';

import { setSessionExpiryModalState } from '../../redux/action/themeConfigs';
import { setAuthUser, setLoginStep, setSessionData, verifyToken } from '../../redux/action/session';

async function authenticate(
    setAuthUser,
    setLoginStep,
    setSessionData,
    verifyToken,
    setSessionExpiryModalState
) {
    axios.defaults.withCredentials = true;

    try {
        const { data } = await verifyToken();

        if (data) {
            setAuthUser(data);
        }
        else {
            // reset all sessions
            setAuthUser(null);
            setLoginStep(null);
            setSessionData(null);
            setSessionExpiryModalState(false);
        }
    }
    catch {
        // reset all sessions
        setAuthUser(null);
        setLoginStep(false);
        setSessionData(null);
        setSessionExpiryModalState(false);
    }
}

function useWithAuthenticate({
    setAuthUser,
    setLoginStep,
    setSessionData,
    verifyToken,
    setSessionExpiryModalState
}) {
    useEffect(() => {
        authenticate(
            setAuthUser,
            setLoginStep,
            setSessionData,
            verifyToken,
            setSessionExpiryModalState
        );
    }, [setAuthUser,
        setLoginStep,
        setSessionData,
        verifyToken,
        setSessionExpiryModalState])
}

useWithAuthenticate.propTypes = {
    setAuthUser: PropTypes.func.isRequired,
    setLoginStep: PropTypes.func.isRequired,
    setSessionData: PropTypes.func.isRequired,
    verifyToken: PropTypes.func.isRequired,
    setSessionExpiryModalState: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setAuthUser,
    setLoginStep,
    setSessionData,
    verifyToken,
    setSessionExpiryModalState
}, dispatch);

export default connect(
    null,
    mapDispatchToProps,
)(useWithAuthenticate);
