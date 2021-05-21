import React from "react";

function Pagination(props) {
	let page = props.page + 1;
	return (
		<>
			{page !== 1 && <button onClick={() => props.setPage(props.page - 1)}>prev</button>}
			{page > 1 && <button onClick={() => props.setPage(0)}>1</button>}
			{page > 2 && <button onClick={() => props.setPage(1)}>...</button>}
			<button>{page}</button>
			{props.nextPageAvailable && <button onClick={() => props.setPage(props.page + 1)}>{page + 1}</button>}
			{props.nextPageAvailable && <button onClick={() => props.setPage(props.page + 1)}>next</button>}
		</>
	);
}

export default Pagination;
