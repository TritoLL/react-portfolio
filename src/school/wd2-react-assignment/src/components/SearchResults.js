import CritterCard from "./CritterCard";

export default function SearchResults({
	critters,
	searchTerm,
	searchResults,
	numberOfResults,
}) {
	return (
		searchTerm && (
			<>
				<p className="results-found">
					{numberOfResults} Results Found Containing "{searchTerm}"
				</p>
				<ul className="results-list">
					{searchResults.map((result, index) => (
						<li key={index}>
							<CritterCard critter={critters[result]} />
						</li>
					))}
				</ul>
			</>
		)
	);
}
