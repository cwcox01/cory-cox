import React from "react";
import Link from "next/link";

export default function NavbarItem({ navbarClassName, navbarURL, navbarText }) {
	return (
		<li className={navbarClassName}>
			<Link href={navbarURL}>{navbarText}</Link>
		</li>
	);
}
