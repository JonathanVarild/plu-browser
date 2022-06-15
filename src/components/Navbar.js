import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCamera, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


import "../css/Navbar.css";

function Navbar() {
	return (
		<div id="navContainer">
			<nav>
				<FontAwesomeIcon className="activeNav" icon={faBars} />
				<FontAwesomeIcon icon={faMagnifyingGlass} />
				<FontAwesomeIcon icon={faCamera} />
			</nav>
		</div>
	);
}

export default Navbar;
