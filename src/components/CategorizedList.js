import React from "react";

import "../css/CategorizedList.css";

const CategorizedList = ({ title, children }) => {
	return (
		<div className="categorizedList">
			<h2>{title}</h2>
			<div className="itemList">{children}</div>
		</div>
	);
};

export default CategorizedList;
