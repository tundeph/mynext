import React from "react"
import Link from "next/link"

const Navbar = () => {
	return (
		<nav style={{ display: "flex", gap: 12 }}>
			<div className="logo">
				<h3> Logo</h3>
			</div>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/details/address">Address</Link>
		</nav>
	)
}

export default Navbar
