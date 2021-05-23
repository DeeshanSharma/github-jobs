import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "./reducer";
import ACTIONS from "./reducer/actionTypes";

const baseUrl = `${process.env.REACT_APP_PROXY}https://jobs.github.com/positions.json`;

function useFetchJob(params, page) {
	let [state, dispatch] = useReducer(reducer, { jobs: [], loading: false, error: false, jobsAvailable: true, nextPageAvailable: false });

	useEffect(() => {
		dispatch({ type: ACTIONS.GET_DATA });
		const source1 = axios.CancelToken.source();
		axios
			.get(baseUrl, {
				cancelToken: source1.token,
				params: {
					markdown: true,
					page: page,
					...params,
				},
			})
			.then((res) => dispatch({ type: ACTIONS.SET_DATA, payload: { jobs: res.data } }))
			.catch((err) => {
				if (axios.isCancel(err)) return;
				else {
					dispatch({ type: ACTIONS.ERROR, payload: { error: err } });
				}
			});

		const source2 = axios.CancelToken.source();
		axios
			.get(baseUrl, {
				cancelToken: source2.token,
				params: {
					markdown: true,
					page: page + 1,
					...params,
				},
			})
			.then((res) => dispatch({ type: ACTIONS.NEXT_PAGE_AVAILABLE, payload: { jobs: res.data } }))
			.catch((err) => {
				if (axios.isCancel(err)) return;
			});
		return () => {
			source1.cancel();
			source2.cancel();
		};
	}, [page, params]);

	return state;
}

export default useFetchJob;
