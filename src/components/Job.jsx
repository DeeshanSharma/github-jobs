import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardMedia, CardContent, CardActions, Chip, Typography, Button, Collapse, IconButton } from "@material-ui/core";
import LocationIcon from "@material-ui/icons/LocationOn";
import WatchIcon from "@material-ui/icons/WatchLater";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Markdown from "markdown-to-jsx";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		marginBottom: "40px",
		textAlign: "center",
		wordBreak: "break-word",
		[theme.breakpoints.down(960)]: {
			maxWidth: 265,
		},
		[theme.breakpoints.down(600)]: {
			minWidth: 265,
			maxWidth: "unset",
		},
		[theme.breakpoints.between(960, 1150)]: {
			maxWidth: "calc(100%/3 - 30px)",
		},
		[theme.breakpoints.between(600, 960)]: {
			maxWidth: "calc(100%/2 - 20px)",
		},
	},
	imgContainer: {
		maxWidth: 345,
		padding: 10,
		[theme.breakpoints.down(960)]: {
			maxWidth: 400,
		},
		[theme.breakpoints.down(600)]: {
			maxWidth: "unset",
		},
		[theme.breakpoints.between(600, 1150)]: {
			maxWidth: "unset",
		},
	},
	media: {
		width: "100%",
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	chipLabels: {
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
		margin: "5px 0",
		"& > *": {
			margin: theme.spacing(0.625),
		},
	},
}));

function Jobs(props) {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);

	function handleExpandClick() {
		setExpanded(!expanded);
	}
	return (
		<Card variant="outlined" className={classes.root}>
			<CardHeader title={props.job.title} subheader={new Date(props.job.created_at).toLocaleDateString()} />
			<div className={classes.imgContainer}>
				<CardMedia className={classes.media} component="img" src={props.job.company_logo} title={props.job.company} />
			</div>
			<CardContent>
				<div className={classes.chipLabels}>
					<Chip size="small" icon={<LocationIcon />} color="primary" label={props.job.location} />
					<Chip size="small" icon={<WatchIcon />} color="secondary" label={props.job.type} />
				</div>
				<Typography variant="body1">{props.job.company}</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<Button variant="contained" size="small" color="primary" href={props.job.url} target="_blank" rel="noopener noreferrer">
					Apply Now
				</Button>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more">
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography variant="body1" style={{ textAlign: "left" }}>
						<Markdown>{props.job.description}</Markdown>
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}

export default Jobs;
