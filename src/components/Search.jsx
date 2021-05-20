import React from "react";

function Search(props) {
	function formSubmitHandler(event) {
		event.preventDefault();
		const formInputs = event.target;
		const searchParams = {
			[formInputs[0].name]: formInputs[0].value,
			[formInputs[1].name]: formInputs[1].value,
			[formInputs[2].name]: formInputs[2].checked,
		};
		props.setParams(searchParams);
		formInputs[0].value = "";
		formInputs[1].value = "";
		formInputs[2].checked = false;
	}

	return (
		<form onSubmit={(event) => formSubmitHandler(event)}>
			<input type="text" name="description" placeholder="Job Title" />
			<input type="text" name="location" placeholder="Location" />
			<input type="checkbox" name="full_time" />
			<label htmlFor="full_time">Full Time</label>
			<button type="submit">Search</button>
		</form>
	);
}

export default Search;
