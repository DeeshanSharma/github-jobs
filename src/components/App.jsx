import { Container, Typography } from "@material-ui/core";
import useFetchJobs from "../useFetchJobs";

function App() {
	const { jobs, loading, error } = useFetchJobs();

	return (
		<Container>
			{loading && <Typography variant="h4">Loading...</Typography>}
			{error && <Typography variant="h4">Something went wrong..! Please try refreshing</Typography>}
			{jobs.length > 0 && <Typography variant="h1">{jobs.length}</Typography>}
		</Container>
	);
}

export default App;
