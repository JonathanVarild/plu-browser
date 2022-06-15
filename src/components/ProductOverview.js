import React from "react";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/Header";
import CategorizedList from "../components/CategorizedList";
import ProductItem from "../components/ProductItem";

function ProductOverview() {
	return (
		<>
			<Header title="Produktöversikt" icon={faPenToSquare} />
			
		</>
	);
}

export default ProductOverview;
