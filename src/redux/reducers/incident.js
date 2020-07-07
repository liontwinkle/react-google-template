import types from '../actionType';
import { getToolbarIcon, convertStringToKey } from '../../utils';

const INITIAL_STATE = {
    actionTabs: [],
    activeTabIndex: 0,
    isFetchingFlag: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_ACTION_TABS_REQUEST: {
            return {
                ...state,
                isFetchingFlag: true,
            }
        }
        case types.GET_ACTION_TABS_SUCCESS: {
            const { actionData } = action;
            console.log('actionTabs: ', actionData); // fixme
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
            }
        }
        case types.GET_ACTION_TABS_FAIL: {
            return {
                ...state,
                isFetchingFlag: false,
            }
        }
        case types.SET_ACTION_TAB: {
            return {
                ...state,
                activeTabIndex: action.tabIndex,
            }
        }
        default: return state;
    }
}