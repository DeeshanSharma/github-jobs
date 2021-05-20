import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import useFetchJobs from "../useFetchJobs";
import Job from "./Job";
import Search from "./Search";

function Home(props) {
	const [params, setParams] = useState({});
	const { jobs, loading, error, jobsAvailable } = useFetchJobs(params);

	return (
		<>
			<Search setParams={setParams} />
			{loading && <Typography variant="h4">Loading...</Typography>}
			{error && <Typography variant="h4">Something went wrong..! Please try refreshing</Typography>}
			{!jobsAvailable
				? !loading && !error && <Typography variant="h4">No Jobs Available</Typography>
				: jobs.map((job) => {
						return <Job key={job.id} job={job} />;
				  })}
		</>
	);
}

export default Home;
