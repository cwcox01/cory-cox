import React from "react";
import Link from "next/link";

export default function FooterContent() {
	const today = new Date();
	const year = today.getFullYear();
	return (
		<div className="footer-content d-flex flex-column align-items-center">
			<p className="cory-footer-name mb-0">&copy; Cory Cox {year}</p>
			<p className=" mb-0 footer-email">
				<Link className="footer-email" href="mailto: cory@corycox.com">
					Email Me
				</Link>
			</p>
		</div>
	);
}
