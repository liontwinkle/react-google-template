import React, { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';
import AuthHeader from './auth';
import NonAuthHeader from './nonauth';

function Header() {
    const mapState = useCallback((state) => ({
        authUser: state.sessionState.authUser,
        isInstanceSelected: state.sessionState.isInstanceSelected
    }), [])

    const { authUser, isInstanceSelected } = useMappedState(mapState);

    return authUser && isInstanceSelected ? <AuthHeader /> : <NonAuthHeader />
}

export default Header;
