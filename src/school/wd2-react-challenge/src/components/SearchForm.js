import SearchResults from "./SearchResults";
import { useState } from "react";

export default function SearchForm() {
	// Route Number is what gets passed to the SearchResults component.
	const [routeNumber, setRouteNumber] = useState("");
	const [error, setError] = useState("");

	// Set the route number to the search bar input which will
	// cause the SearchResults component to fetch results.
	function submitQuery(e) {
		// Grab the search bar.
		const input = document.querySelector("#search");

		// Prevent the form from submitting.
		e.preventDefault();

		// If the input value is not valid according to our regex,
		// don't use it and display an error.
		if (input.checkValidity()) {
			setError("");
			setRouteNumber(input.value);
		} else {
			setError(
				"Please enter 1 to 4 numbers, 'BLUE', or a school route (ex: S401)",
			);
			input.focus();
			input.select();
		}
	}

	// For when we are searching from a link button.
	function searchFromButton(route) {
		document.querySelector("#search").value = route;
		setError("");
		setRouteNumber(route);
	}

	// I made the regex here and it was not worth my time.
	// Also a note about the input onChange: if you only set text-transform
	// to uppercase in CSS, the underlying value is still lowercase.
	// In other words, text-transform is visual only. The inline function
	// here truly changes the value to uppercase with each keystroke.
	return (
		<>
			<form id="search-form" onSubmit={() => submitQuery}>
				<fieldset>
					<label htmlFor="search">Search</label>
					<input
						type="text"
						id="search"
						placeholder="by Route Number"
						pattern="(^BLUE$|[S]?[0-9]{1,3})"
						onChange={(e) =>
							(e.target.value = e.target.value.toUpperCase())
						}
					/>
					<p className="descriptor">
						Try '
						<button
							type="button"
							className="linkButton"
							onClick={() => {
								searchFromButton("11");
							}}
						>
							11
						</button>
						' or '
						<button
							type="button"
							className="linkButton"
							onClick={() => {
								searchFromButton("BLUE");
							}}
						>
							BLUE
						</button>
						', or view the{" "}
						<a
							rel="noreferrer noopener"
							target="_blank"
							href="https://winnipegtransit.com/en/routes/list"
						>
							full list of routes
						</a>
						.
					</p>
				</fieldset>
				<div className="buttons">
					<button type="submit" onClick={submitQuery}>
						Search
					</button>
					<button
						type="reset"
						onClick={() => {
							setRouteNumber("");
						}}
					>
						Reset
					</button>
				</div>
				<div className="results">
					<SearchResults error={error} routeNumber={routeNumber} />
				</div>
			</form>
		</>
	);
}
