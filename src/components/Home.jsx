import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import useFetchJobs from "../useFetchJobs";
import Job from "./Job";
import Search from "./Search";
import Pagination from "./Pagination";

function Home(props) {
	const [params, setParams] = useState({});
	const [page, setPage] = useState(0);
	const { jobs, loading, error, jobsAvailable, nextPageAvailable } = useFetchJobs(params, page);

	return (
		<>
			<Search setParams={setParams} />
			<Pagination page={page} setPage={setPage} nextPageAvailable={nextPageAvailable} />
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
