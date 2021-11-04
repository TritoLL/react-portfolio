export default function PassUpCard({ passUp }) {
	// Define a location link string.
	let locationLink;

	// Only create the location link if the location key exists.
	// Some of them are undefined.
	if ("location" in passUp) {
		// For some reason, the data returns longitude first.
		const [longitude, latitude] = passUp.location["coordinates"];
		locationLink = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
	}

	// Don't display a View Location... link if there was no location.
	return (
		<div className="pass-up-card">
			<h4>
				{passUp.route_number} {passUp.route_name}
				{" - " + passUp.route_destination}{" "}
			</h4>
			<h5>
				{new Intl.DateTimeFormat("en-CA", {
					dateStyle: "full",
					timeStyle: "short",
				}).format(new Date(passUp.time))}
			</h5>
			<h5>{passUp.pass_up_type}</h5>
			{"location" in passUp && (
				<a
					target="_blank"
					rel="noreferrer noopener"
					href={locationLink}
				>
					View Location...
				</a>
			)}
		</div>
	);
}
