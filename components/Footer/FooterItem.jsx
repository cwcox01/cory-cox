import React from "react";
import Link from "next/link";

export default function FooterItem({ footerSocialUrl, footerITagClassName }) {
	return (
		<li className="pe-1">
			<Link
				className="social-links"
				href={footerSocialUrl}
				target="_blank"
				rel="noreferrer">
				<i className={footerITagClassName} aria-hidden="true"></i>
			</Link>
		</li>
	);
}
