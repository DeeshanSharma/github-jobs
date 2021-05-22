import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		"& > *": {
			margin: theme.spacing(2),
		},
	},
}));

function Pagination(props) {
	const classes = useStyles();
	let page = props.page + 1;
	return (
		<div className={classes.root}>
			<Page size="large" shape="rounded" page={page} count={props.nextPageAvailable ? page + 1 : page} color="secondary" onChange={(event, page) => props.setPage(page - 1)} />
		</div>
	);
}

export default Pagination;
