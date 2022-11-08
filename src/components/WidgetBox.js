import React from "react";

import "../css/WidgetBox.css";

function WidgetBox({ children, id, className, style, onClick }) {
	return (
		<div id={id || ""} className={"widgetBox" + ((className && " " + className) || "")} style={style || {}} onClick={onClick}>
			{children}
		</div>
	);
}

export default WidgetBox;
