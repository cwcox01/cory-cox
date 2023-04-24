import React from "react";
import Link from "next/link";

export default function FooterNavItem({ footerNavUrl, footerNavText }) {
	return (
		<li className="pe-3">
			<Link href={footerNavUrl}>{footerNavText}</Link>
		</li>
	);
}
