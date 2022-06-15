import React from "react";

import "../css/Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function Header() {
	return (
		<header>
			<h1>Produktlista</h1>
			<FontAwesomeIcon icon={faFilter} />
		</header>
	);
}

export default Header;
