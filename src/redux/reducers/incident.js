import types from '../actionType';
import { getToolbarIcon, convertStringToKey } from '../../utils';

const INITIAL_STATE = {
  actionTabs: [],
  mentionUsers: [],
  typeList: null,
  activeTabIndex: 0,
  isFetchingFlag: false,
  incidentData: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_ACTION_TABS_REQUEST: {
      return {
        ...state,
        isFetchingFlag: true,
      };
    }
    case types.GET_ACTION_TABS_SUCCESS: {
      const { actionData } = action;
      const newActionTabs = actionData.tabs.map((actionTabItem) => (
        {
          id: actionTabItem.id,
          key: convertStringToKey(actionTabItem.hover_over),
          value: actionTabItem.hover_over,
          icon: getToolbarIcon(actionTabItem.tab_icon),
        }
      ));
      return {
        ...state,
        actionTabs: newActionTabs,
        actionFields: actionData.fields,
        isFetchingFlag: false,
      };
    }
    case types.GET_ACTION_TABS_FAIL: {
      return {
        ...state,
        isFetchingFlag: false,
      };
    }
    case types.SET_ACTION_TAB: {
      const activeIndex = (state.activeTabIndex !== action.tabIndex) ? action.tabIndex : 0;
      return {
        ...state,
        activeTabIndex: activeIndex,
      };
    }
    case types.GET_HEAD_LIST_REQUEST: {
      return {
        ...state,
        isFetchingFlag: true,
      };
    }
    case types.GET_HEAD_LIST_SUCCESS: {
      const recvTypeList = action.typeaheadList;
      return {
        ...state,
        typeList: recvTypeList.slice(1),
        isFetchingFlag: false,
      };
    }
    case types.GET_HEAD_LIST_FAIL: {
      return {
        ...state,
        isFetchingFlag: false,
      };
    }
    case types.SAVE_INCIDENT_DATA_REQUEST: {
      return {
        ...state,
        isCreatingFlag: true,
      };
    }
    case types.SAVE_INCIDENT_DATA_SUCCESS: {
      const { incidentData } = action.payload;
      return {
        ...state,
        incidentData,
        isCreatingFlag: false,
      };
    }

    case types.SAVE_INCIDENT_DATA_FAIL: {
      return {
        ...state,
        isCreatingFlag: false,
      };
    }

    case types.GET_USERS_INCIDENT_DATA_REQUEST: {
      return {
        ...state,
        isFetchingFlag: true,
      };
    }

    case types.GET_USERS_INCIDENT_DATA_SUCCESS: {
      const { mentionUsers } = action;
      return {
        ...state,
        mentionUsers,
        isFetchingFlag: false,
      };
    }

    case types.GET_USERS_INCIDENT_DATA_FAIL: {
      return {
        ...state,
        isFetchingFlag: false,
      };
    }

    default:
      return state;
  }
};
