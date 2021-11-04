export default function Footer() {
	return (
		<footer>
			<p>
				Built with{" "}
				<a
					href="https://acnhapi.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					ACNH API
				</a>
			</p>
			<p>Copyright &copy; {new Date().getFullYear()} Alexander Friesen</p>
		</footer>
	);
}
