import {
	facebookIcon,
	instagramIcon,
	twitterIcon,
	companyIcon,
} from "../../svgs";

export default function Footer() {
	return (
		<footer className="footer-container">
			<section className="company-info">
				<span className="companyIcon">{companyIcon}</span>

				<p>Email : Bilalahmedgt4@gmail.com</p>
				<p>Dhok khabba, Wah Cantt</p>
			</section>
			<section className="page-links">
				<a className="link" href="#">
					Home
				</a>
				<a className="link" href="#">
					About us
				</a>
				<a className="link" href="#">
					Contact us
				</a>
			</section>
			<section className="contact-detail">
				{facebookIcon}
				{instagramIcon}
				{twitterIcon}
				<p className="contactusfooter">Contact us</p>
				<p className="contactnofooter">03015248961</p>
			</section>
		</footer>
	);
}
