import React from "react";

import Header from "../components/Header";
import CategorizedList from "../components/CategorizedList";
import ProductItem from "../components/ProductItem";

function Browse() {
	return (
		<>
			<Header />
			<CategorizedList title="A">
				<ProductItem></ProductItem>
				<ProductItem></ProductItem>
			</CategorizedList>
			<CategorizedList title="B">
				<ProductItem></ProductItem>
				<ProductItem></ProductItem>
				<ProductItem></ProductItem>
			</CategorizedList>
		</>
	);
}

export default Browse;
