import { useEffect, useState } from "react";
import PassUpCard from "./PassUpCard";

export default function SearchResults({ error, routeNumber }) {
	// passUps contains the actual query response, the data we want.
	const [passUps, setPassUps] = useState([]);

	// resultsFound is the number of results found, for display in the UI.
	const [resultsFound, setResultsFound] = useState(0);

	// ready is a flag for whether or not we can safely display the results.
	const [ready, setReady] = useState(false);

	// Query the API to find information based on the given route number.
	function queryAPI() {
		setReady(false);
		if (routeNumber !== "") {
			fetch(
				encodeURI(
					`https://data.winnipeg.ca/resource/mer2-irmb.json?$limit=100&$order=time DESC&$where=route_number LIKE '${routeNumber}'`,
				),
			)
				.then((response) => response.json())
				.then((data) => {
					setResultsFound(data.length);
					setPassUps(data);
					setReady(true);
				});
		}
	}

	// Invoke queryAPI whenever routeNumber changes.
	useEffect(queryAPI, [routeNumber]);

	// If there is an error, display it.
	if (error !== "") return <p className="error">{error}</p>;

	// If we are ready, display results. Otherwise, display "Loading..."
	if (ready) {
		return (
			<>
				<p className="results-found">
					<b>{resultsFound} Results Found.</b>
				</p>
				<ul className="results-list">
					{passUps.map((passUp) => (
						<li key={passUp.pass_up_id}>
							<PassUpCard passUp={passUp} />
						</li>
					))}
				</ul>
			</>
		);
	} else return routeNumber && <p className="results-found">Loading...</p>;
}
