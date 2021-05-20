import { useReducer } from "react";
import reducer from "./reducer";

function useFetchJob() {
	const [state, dispatch] = useReducer(reducer, { jobs: [], loading: false, error: false });
	return state;
}

export default useFetchJob;
