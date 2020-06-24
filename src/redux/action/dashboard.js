import types from '../actionType';

export const setViewIndex = (index) => (dispatch) => {
    dispatch({
        type: types.SET_VIEW_INDEX,
        viewIndex: index
    })
}