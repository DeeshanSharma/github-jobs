import ACTIONS from "./actionTypes";

function checkJob(state, action) {
	if (action.payload.jobs.length <= 0) {
		return { ...state, loading: false, jobsAvailable: false, jobs: [] };
	}
	return { ...state, loading: false, jobsAvailable: true, jobs: action.payload.jobs };
}

function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.GET_DATA:
			return { loading: true, jobs: [] };
		case ACTIONS.SET_DATA:
			return checkJob(state, action);
		case ACTIONS.ERROR:
			return { loading: false, error: action.payload.error, jobs: [] };
		default:
			return state;
	}
}

export default reducer;
