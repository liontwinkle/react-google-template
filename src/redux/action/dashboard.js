import types from '../actionType';

// eslint-disable-next-line import/prefer-default-export
export const setViewIndex = (index) => (dispatch) => {
  dispatch({
    type: types.SET_VIEW_INDEX,
    viewIndex: index,
  });
};
