import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import axios from 'axios';

import { setSessionExpiryModalState } from '../../redux/action/themeConfigs';
import { resetSessionData, verifyToken } from '../../redux/action/session';

async function authenticate(
    setAuthUser,
    resetSessionData,
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
            resetSessionData();
            setSessionExpiryModalState(false);
        }
    }
    catch {
        // reset all sessions
        resetSessionData();
        setSessionExpiryModalState(false);
    }
}

function useWithAuthenticate({
    resetSessionData,
    verifyToken,
    setSessionExpiryModalState
}) {
    useEffect(() => {
        authenticate(
            resetSessionData,
            verifyToken,
            setSessionExpiryModalState
        );
    }, [resetSessionData,
        verifyToken,
        setSessionExpiryModalState])
}

useWithAuthenticate.propTypes = {
    resetSessionData: PropTypes.func.isRequired,
    verifyToken: PropTypes.func.isRequired,
    setSessionExpiryModalState: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    resetSessionData,
    verifyToken,
    setSessionExpiryModalState
}, dispatch);

export default connect(
    null,
    mapDispatchToProps,
)(useWithAuthenticate);
