import React, { useState } from "react";

import "../css/SwipableWidgetBox.css";
import WidgetBox from "./WidgetBox";

function SwipableWidgetBox({ children, id, className, test }) {
	const [page, setPage] = useState(0);

	function scrollManager(scroll) {
		let scrollPosition = scroll.target.scrollLeft;
		let elementWidth = scroll.target.children[0].getBoundingClientRect().width;

		setPage(Math.round(scrollPosition / elementWidth));
	}

	var pageIndicator = "";

	if (children.length) {
		pageIndicator = children.map((_, index) => (
			<div key={index} style={{ backgroundColor: (page == index && "var(--darker-gray)") || "" }} />
		));

		pageIndicator = <div className="swipableNavbar">{pageIndicator}</div>;
	}

	return (
		<WidgetBox id={id} className={"swipableAreaContainer" + ((className && " " + className) || "")}>
			<div className="swipableContentArea" onScroll={scrollManager}>
				{children}
			</div>
			{pageIndicator}
		</WidgetBox>
	);
}

export default SwipableWidgetBox;
