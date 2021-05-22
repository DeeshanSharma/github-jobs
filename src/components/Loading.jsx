import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent, Button, IconButton, CardActions } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
	loaderContainer: {
		display: "flex",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "space-between",
		[theme.breakpoints.down(600)]: {
			justifyContent: "center",
		},
	},
	root: {
		width: 345,
		margin: "40px 0",
		textAlign: "center",
		wordBreak: "break-word",
		[theme.breakpoints.down(960)]: {
			width: 265,
		},
		[theme.breakpoints.down(600)]: {
			minWidth: 265,
			width: "unset",
		},
		[theme.breakpoints.between(960, 1150)]: {
			width: "calc(100%/3 - 30px)",
		},
		[theme.breakpoints.between(600, 960)]: {
			width: "calc(100%/2 - 20px)",
		},
	},
	media: {
		width: "100%",
		height: "180px",
	},
}));

function Media(props) {
	const classes = useStyles();

	return (
		<Card variant="outlined" className={classes.root}>
			<CardHeader title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />} subheader={<Skeleton animation="wave" height={10} width="40%" />} />
			<Skeleton animation="wave" variant="rect" className={classes.media} />
			<CardContent>
				<React.Fragment>
					<Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
					<Skeleton animation="wave" height={10} width="80%" />
				</React.Fragment>
			</CardContent>
			<CardActions disableSpacing>
				<Button size="small">
					<Skeleton animation="wave" variant="rect" height={35} width={80} />
				</Button>
				<IconButton style={{ marginLeft: "auto" }}>
					<Skeleton animation="wave" variant="circle" height={35} width={35} />
				</IconButton>
			</CardActions>
		</Card>
	);
}

function Loading() {
	const classes = useStyles();
	return (
		<div className={classes.loaderContainer}>
			<Media />
			<Media />
			<Media />
		</div>
	);
}

export default Loading;
