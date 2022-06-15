import React from "react";

import "../css/WidgetBox.css"

function WidgetBox({ children, id, className }) {
	return <div id={id || ""} className={"widgetBox" + ((className && " " + className) || "")}>{children}</div>;
}

export default WidgetBox;
