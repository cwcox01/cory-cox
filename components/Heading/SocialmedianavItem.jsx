import React from "react";
import Link from "next/link";

export default function SocialmedianavItem({ socialBtnUrl, socialBtnText }) {
	return (
		<li className="ps-2 pt-1">
			<button className="btn btn-secondary">
				<Link href={socialBtnUrl} target="_blank" rel="noreferrer">
					<span>{socialBtnText}</span>
				</Link>
			</button>
		</li>
	);
}
