import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "./reducer";
import ACTIONS from "./reducer/actionTypes";

const baseUrl = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

function useFetchJob(props) {
	const [state, dispatch] = useReducer(reducer, { jobs: [], loading: false, error: false });

	useEffect(() => {
		dispatch({ type: ACTIONS.GET_DATA });
		axios
			.get(baseUrl, {
				params: {
					markdown: true,
				},
			})
			.then((res) => dispatch({ type: ACTIONS.SET_DATA, payload: { jobs: res.data } }))
			.catch((err) => dispatch({ type: ACTIONS.ERROR, payload: { error: err } }));
	}, []);

	return state;
}

export default useFetchJob;
