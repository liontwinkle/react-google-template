import React, { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';
import AuthHeader from './auth';
import NonAuthHeader from './nonauth';

function Header() {
    const mapState = useCallback((state) => ({
        authUser: state.sessionState.authUser,
        loginStep: state.sessionState.loginStep
    }), [])

    const { authUser, loginStep } = useMappedState(mapState);

    return authUser && loginStep ? <AuthHeader /> : <NonAuthHeader />
}

export default Header;
