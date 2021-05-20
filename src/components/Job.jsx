import React from "react";
import Markdown from "markdown-to-jsx";

function Jobs(props) {
	return (
		<>
			<h1>{props.job.title}</h1>
			<span>{new Date(props.job.created_at).toLocaleDateString()}</span>
			<h3>{props.job.company}</h3>
			<p>
				<span>{props.job.type}</span>
				<span>{props.job.location}</span>
			</p>
			<a href={props.job.url} target="_blank" rel="noreferrer">
				Apply Now
			</a>
			<img src={props.job.company_logo} alt="" height="50px" />
			<Markdown>{props.job.description}</Markdown>
		</>
	);
}

export default Jobs;
