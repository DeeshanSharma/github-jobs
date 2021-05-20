import { Container, Typography } from "@material-ui/core";
import useFetchJobs from "../useFetchJobs";

function App() {
	const { jobs, loading, error } = useFetchJobs();

	return (
		<Container>
			{loading && <h1>Loading...</h1>}
			{error && <h1>Something went wrong..! Please try refreshing</h1>}
			<Typography variant="h1">{jobs.length}</Typography>
		</Container>
	);
}

export default App;
