import React from "react";

import "../css/WidgetBox.css";

function WidgetBox({ children, id, className, style }) {
	return (
		<div id={id || ""} className={"widgetBox" + ((className && " " + className) || "")} style={style || {}}>
			{children}
		</div>
	);
}

export default WidgetBox;
