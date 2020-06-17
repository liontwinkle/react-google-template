import types from '../actionType';

export const setMainMenuState = (value) => (dispatch) => {
    dispatch({
        type: types.SET_MAIN_MENU_STATE,
        isNavbarMenuOpened: value
    })
}

export const setNavbarMenuState = (value) => (dispatch) => {
    dispatch({
        type: types.SET_NAVBAR_MENU_STATE,
        isNavbarMenuOpened: value
    })
}

export const setSessionExpiryModalState = (expiryState) => (dispatch) => {
    dispatch({
        type: types.SET_SESSION_EXPIRY_MODAL_STATE,
        isSessionExpiryModalOpened: expiryState
    })
}