import React from "react";

import "../css/Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ title, icon }) {
	return (
		<header>
			<h1>{title}</h1>
			{icon && <FontAwesomeIcon icon={icon} />}
		</header>
	);
}

export default Header;
