import React from "react"
import Link from "next/link"

const Navbar = () => {
	return (
		<div>
			<nav style={{ display: "flex", gap: 12 }}>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/details/address">Address</Link>
			</nav>
		</div>
	)
}

export default Navbar
