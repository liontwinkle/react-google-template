import React, { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';
import AuthHeader from './auth';
import NonAuthHeader from './nonauth';

function Header() {
    const mapState = useCallback((state) => ({
        authUser: state.sessionState.authUser
    }), [])

    const { authUser } = useMappedState(mapState);

    return authUser ? <AuthHeader /> : <NonAuthHeader />
}

export default Header;
