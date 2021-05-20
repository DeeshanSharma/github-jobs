import ACTIONS from "./actionTypes";

function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.GET_DATA:
			return { loading: true, jobs: [] };
		case ACTIONS.SET_DATA:
			return { ...state, jobs: action.payload.jobs };
		case ACTIONS.ERROR:
			return { ...state, error: true };
		default:
			return state;
	}
}

export default reducer;
