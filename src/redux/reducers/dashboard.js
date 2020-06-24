import types from '../actionType';

const INITIAL_STATE = {
	viewIndex: 0,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SET_VIEW_INDEX: {
            const viewIndex = action.viewIndex;
            console.log('index: ', viewIndex); // fixme
			return {
				...state,
				viewIndex,
			};
		}
		default: return state;
	}
}
