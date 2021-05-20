import ACTIONS from "./actionTypes";

function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.GET_DATA:
			return { loading: true, jobs: [] };
		case ACTIONS.SET_DATA:
			return { ...state, loading: false, jobs: action.payload.jobs };
		case ACTIONS.ERROR:
			return { loading: false, error: action.payload.error, jobs: [] };
		default:
			return state;
	}
}

export default reducer;
