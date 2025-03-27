import React, { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import "animate.css";

function Nav({ observers }) {
	const [showNav, setShowNav] = useState(false);
	const [activePage, setActivePage] = useState("homepage");

	const selectPage = (page) => {
		setActivePage(page);
		setShowNav(false);
	};

	useEffect(() => {
		for (const [key, value] of Object.entries(observers)) {
			if (value) {
				selectPage(key);
				break;
			}
		}
	}, [observers]);

	return (
		<div className="nav-container">
			<button className="menu-button" onClick={() => setShowNav(true)}>
				<IoMdMenu />
			</button>
			<nav className={showNav ? "menu-show" : "menu-hide"}>
				<div className="nav-link-wrapper">
					<button className="close-btn" onClick={() => setShowNav(false)}>
						<IoMdClose className="icon" />
					</button>
					<a
						href="#about-me"
						className={activePage == "about-me" && "active"}
						onClick={() => selectPage("about-me")}
					>
						about me
					</a>
					<a
						href="#projects"
						onClick={() => selectPage("projects")}
						className={activePage == "projects" && "active"}
					>
						projects
					</a>
					<a
						href="#achievements"
						onClick={() => selectPage("achievements")}
						className={activePage == "achievements" && "active"}
					>
						achievements
					</a>
					<a
						href="#involvement"
						onClick={() => selectPage("involvement")}
						className={activePage == "involvement" && "active"}
					>
						involvement
					</a>
					<a
						href="#contact-me"
						onClick={() => selectPage("contact-me")}
						className={activePage == "contact-me" && "active"}
					>
						contact me
					</a>
				</div>
			</nav>
		</div>
	);
}

export default Nav;
