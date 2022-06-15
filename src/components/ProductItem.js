import React from "react";

import "../css/ProductItem.css";
import apple from "../media/apple.jpg";

const ProductItem = ({ title, subtitle, pluCode }) => {
	return (
		<div className="productItem">
			<img src={apple} alt="" />
			<div className="itemInfo">
				<h3>{title}</h3>
				<h4>{subtitle}</h4>
			</div>
		</div>
	);
};

export default ProductItem;
