export default function Header() {
	return (
		<header className="header-container">
			<h1 className="heading">React TODO</h1>
			<div className="header-options">
				<a className="link" href="#">
					Home
				</a>
				<a className="link hasSeparatorBorder" href="#">
					About us
				</a>
				<a className="link" href="#">
					Contact Us
				</a>
			</div>
		</header>
	);
}
