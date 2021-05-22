import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, FormControlLabel, Checkbox } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ResetIcon from "@material-ui/icons/RotateLeft";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 20,
		"& > *": {
			margin: theme.spacing(1),
		},
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
	},
	buttonContainer: {
		"& > *": {
			margin: theme.spacing(1),
		},
	},
}));

function Search(props) {
	const classes = useStyles();

	function formSubmitHandler(event) {
		event.preventDefault();
		const formInputs = event.target;
		const searchParams = {
			[formInputs[0].name]: formInputs[0].value,
			[formInputs[2].name]: formInputs[2].value,
			[formInputs[4].name]: formInputs[4].checked,
		};
		props.setParams(searchParams);
	}

	return (
		<form className={classes.root} onSubmit={(event) => formSubmitHandler(event)} noValidate autoComplete="off">
			<TextField label="Job Title" name="description" variant="outlined" size="small" />
			<TextField label="Location" name="location" variant="outlined" size="small" />
			<FormControlLabel control={<Checkbox name="full_time" color="primary" />} label="Full Time" />
			<div className={classes.buttonContainer}>
				<Button type="submit" variant="outlined" color="primary" startIcon={<SearchIcon />}>
					Search
				</Button>
				<Button type="reset" onClick={() => props.setParams({})} variant="outlined" color="secondary" startIcon={<ResetIcon />}>
					Reset
				</Button>
			</div>
		</form>
	);
}

export default Search;
