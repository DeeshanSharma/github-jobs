import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import useFetchJobs from "../useFetchJobs";
import Job from "./Job";
import Search from "./Search";
import Pagination from "./Pagination";
import Loading from "./Loading";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 20,
	},
	msgContainer: {
		marginTop: 50,
		textAlign: "center",
	},
	jobsContainer: {
		display: "flex",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "space-between",
		[theme.breakpoints.down(600)]: {
			justifyContent: "center",
		},
		"& h4": {
			width: "100%",
			textAlign: "center",
		},
	},
}));

function Home(props) {
	const classes = useStyles();
	const [params, setParams] = useState({});
	const [page, setPage] = useState(0);
	const { jobs, loading, error, jobsAvailable, nextPageAvailable } = useFetchJobs(params, page);

	return (
		<div>
			<Search setParams={setParams} />
			<Pagination page={page} setPage={setPage} nextPageAvailable={nextPageAvailable} />
			<div className={classes.msgContainer}>
				{loading && <Loading />}
				{error && <Typography variant="h4">Something went wrong..! Please try refreshing</Typography>}
			</div>
			<div className={classes.jobsContainer}>
				{!jobsAvailable
					? !loading && !error && <Typography variant="h4">No Jobs Available</Typography>
					: jobs.map((job) => {
							return <Job key={job.id} job={job} />;
					  })}
			</div>
		</div>
	);
}

export default Home;
