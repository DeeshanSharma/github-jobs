import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import WarningIcon from "@material-ui/icons/Warning";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		margin: "20px 0",
	},
	alertBox: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: theme.warningBG,
	},
}));

function Warning() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Alert severity="warning" icon={<WarningIcon fontSize="large" />} className={classes.alertBox}>
				<AlertTitle>Warning..!</AlertTitle>
				GitHub Jobs is deprecated! New jobs will not be posted from May 19, 2021. It will shut down entirely on August 19, 2021. Read more in the{" "}
				<strong>
					<Link
						href="https://github.blog/changelog/2021-04-19-deprecation-notice-github-jobs-site"
						target="_blank"
						rel="noopener noreferrer"
						color="inherit"
						style={{ textDecoration: "underline" }}>
						GitHub blog post
					</Link>
				</strong>
			</Alert>
		</div>
	);
}

export default Warning;
