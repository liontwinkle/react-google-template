import incidentService from '../../services/incident.service';
import types from '../actionType';

export const getActionTabs = (idEvent, idInstance) => (dispatch, getState) => {
  if (getState().incidentData.isFetchingFlag) {
    return Promise.reject();
  }

  dispatch({
    type: types.GET_ACTION_TABS_REQUEST,
  });

  return incidentService.GetActionTabs(idEvent, idInstance)
    .then((data) => {
      dispatch({
        type: types.GET_ACTION_TABS_SUCCESS,
        actionData: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.GET_ACTION_TABS_FAIL,
        error,
      });
      throw error;
    });
};

export const setActiveIndex = (index) => (dispatch) => {
  dispatch({
    type: types.SET_ACTION_TAB,
    tabIndex: index,
  });
};

export const getFieldList = (tabIndex) => (dispatch, getState) => {
  if (getState().incidentData.isFetchingFlag) {
    return Promise.reject();
  }

  dispatch({
    type: types.GET_FIELD_LIST_REQUEST,
  });

  return incidentService.GetFieldList(tabIndex)
    .then((data) => {
      dispatch({
        type: types.GET_FIELD_LIST_SUCCESS,
        actionTabs: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.GET_FIELD_LIST_FAIL,
        error,
      });
      throw error;
    });
};

export const getTypeAheadList = (tabIndex) => (dispatch, getState) => {
  if (getState().incidentData.isFetchingFlag) {
    return Promise.reject();
  }

  dispatch({
    type: types.GET_HEAD_LIST_REQUEST,
  });

  return incidentService.GetTypeAheadList(tabIndex)
    .then((data) => {
      dispatch({
        type: types.GET_HEAD_LIST_SUCCESS,
        typeaheadList: data,
      });
      return data;
    })
    .catch((error) => {
      dispatch({
        type: types.GET_HEAD_LIST_FAIL,
        error,
      });
      throw error;
    });
};
