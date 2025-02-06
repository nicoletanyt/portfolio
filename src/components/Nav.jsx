import React, { useEffect, useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import 'animate.css'

function Nav() {

    const [showNav, setShowNav] = useState(false);

	return (
		<div className="nav-container">
			<button className="menu-button" onClick={() => setShowNav(true)}>
				<IoMdMenu />
			</button>
			<nav className={showNav ? "menu-show" : "menu-hide"}>
				<button className="close-btn" onClick={() => setShowNav(false)}>
					<IoMdClose className="icon" />
				</button>
				<a href="#about-me">about me</a>
				<a href="#projects">projects</a>
				<a href="#achievements">achievements</a>
				<a href="#involvement">involvement</a>
			</nav>
		</div>
	);
}

export default Nav