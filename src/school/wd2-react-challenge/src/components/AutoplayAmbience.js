// Stupid modern browsers ruining annoying autoplay. Booo. Enable it in your browser for maximum Bugsnax.
export default function AutoplayAmbience() {
	const baseURL = "https://www.youtube.com/embed/";
	const videoID = "QhYZ21kKEZ8";
	const parameters = "?autoplay=1&loop=1&playlist=" + videoID;
	const url = baseURL + videoID + parameters;

	// Return a hidden video to play music.
	return (
		<iframe
			style={{ display: "none" }}
			title="autoplay"
			width="0"
			height="0"
			src={url}
		></iframe>
	);
}
