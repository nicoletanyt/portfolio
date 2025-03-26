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
				<div className='nav-link-wrapper'>
					<button className="close-btn" onClick={() => setShowNav(false)}>
						<IoMdClose className="icon" />
					</button>
					<a href="#about-me" onClick={() => setShowNav(false)}>
						about me
					</a>
					<a href="#projects" onClick={() => setShowNav(false)}>
						projects
					</a>
					<a href="#achievements" onClick={() => setShowNav(false)}>
						achievements
					</a>
					<a href="#involvement" onClick={() => setShowNav(false)}>
						involvement
					</a>
				</div>
			</nav>
		</div>
	);
}

export default Nav