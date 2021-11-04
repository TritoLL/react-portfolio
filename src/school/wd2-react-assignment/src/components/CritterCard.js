import { useState } from "react";

export default function CritterCard({ critter }) {
	// Card state
	const [artworkMode, setArtworkMode] = useState(false);

	// Critter data
	// Destructuring this would be a mess, this is easier in my opinion
	// destructuring is still being done through props itself though.
	const name = critter.name["name-USen"];
	const price = critter.price;
	const rarity = critter.availability.rarity;
	const location = critter.availability.location;
	const icon = critter.icon_uri;
	const image = critter.image_uri;

	let rarityColor;
	switch (rarity.toLowerCase()) {
		case "common":
			rarityColor = "grey";
			break;

		case "uncommon":
			rarityColor = "green";
			break;

		case "rare":
			rarityColor = "blue";
			break;

		case "ultra-rare":
			rarityColor = "purple";
			break;

		default:
			rarityColor = "black";
			break;
	}

	const visible = {
		position: "relative",
		visible: "default",
		width: "100%",
		height: "100%",
		objectFit: "contain",
	};

	const hidden = {
		display: "none",
		visible: "hidden",
	};

	return (
		<div className="card" onClick={() => setArtworkMode(!artworkMode)}>
			<div style={artworkMode ? visible : hidden}>
				<h3 className="title on-top">{name}</h3>
				<img
					src={image}
					alt={name}
					style={artworkMode ? visible : hidden}
				/>
				<p className="tiny on-bottom">(click to view info)</p>
			</div>
			<div style={artworkMode ? hidden : visible}>
				<h3 className="title">{name}</h3>
				<img src={icon} alt={name} />
				<p>${price}</p>
				<p style={{ color: rarityColor }}>{rarity}</p>
				<p>Location: {location}</p>
				<p className="tiny on-bottom">(click to view model)</p>
			</div>
		</div>
	);
}
