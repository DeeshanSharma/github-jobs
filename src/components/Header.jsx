import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography, Tooltip, Zoom } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import SunIcon from "@material-ui/icons/WbSunny";
import MoonIcon from "@material-ui/icons/Brightness3";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiIconButton-root": {
			color: "unset",
		},
	},
	innerHeader: {
		width: 1280,
		margin: "auto",
		padding: "0 25px",
		justifyContent: "space-between",
		[theme.breakpoints.down(1280)]: {
			width: "100vw",
		},
		[theme.breakpoints.down(420)]: {
			"& *": {
				fontSize: 25,
			},
		},
	},
	jobsIcon: {
		margin: "10px 16px 10px 0",
	},
	title: {
		flexGrow: 1,
	},
}));

function Header(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar className={classes.innerHeader}>
					<WorkIcon className={classes.jobsIcon} fontSize="large" />
					<Typography style={{ margin: "10px 0" }} variant="h4" className={classes.title}>
						GitHub Jobs
					</Typography>
					<Tooltip TransitionComponent={Zoom} title="View Source Code" arrow>
						<IconButton href="https://github.com/DeeshanSharma/github-jobs" target="_blank" rel="noreferrer" aria-label="source code">
							<GitHubIcon fontSize="large" />
						</IconButton>
					</Tooltip>
					<Tooltip TransitionComponent={Zoom} title="Switch Theme" arrow>
						<IconButton aria-label="switch mode" onClick={() => props.setDarkMode(!props.darkMode)}>
							{props.darkMode ? <SunIcon fontSize="large" /> : <MoonIcon fontSize="large" />}
						</IconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
