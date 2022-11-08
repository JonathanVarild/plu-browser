import React, { useState } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/Header";
import CategorizedList from "../components/CategorizedList";
import ProductItem from "../components/ProductItem";

function Browse() {

	const [info, setInfo] = useState("")

	return (
		<>
			<Header title="Produktlista" icon={faFilter} />
			<CategorizedList title="A">
				<ProductItem title="Äpple" subtitle="Royal Gala" pluCode="0000" />
				<ProductItem title="Äpple" subtitle="Royal Gala" pluCode="0000" />
				<input value={info} onChange={(_, value) => {setInfo(value)}}></input>
			</CategorizedList>
			<CategorizedList title="B">
				<ProductItem title="Äpple" subtitle="Royal Gala" pluCode="0000" />
				<ProductItem title="Äpple" subtitle="Royal Gala" pluCode="0000" />
				<ProductItem title="Äpple" subtitle="Royal Gala" pluCode="0000" />
				<ProductItem title="Äpple" subtitle="Royal Gala" pluCode="0000" />
				<ProductItem title="Äpple" subtitle="Royal Gala" pluCode="0000" />
				<ProductItem title="Äpple" subtitle="Royal Gala" pluCode="0000" />
				<ProductItem title="Äpple" subtitle="Royal Gala" pluCode="0000" />
				<ProductItem title="Äpple" subtitle="Royal Gala" pluCode="0000" />
				<ProductItem title="Äpple" subtitle="Royal Gala" pluCode="0000" />
				<ProductItem title="Äpple" subtitle="Royal Gala" pluCode="0000" />
				<ProductItem title="Äpple" subtitle="Royal Gala" pluCode="0000" />
				<ProductItem title="Äpple" subtitle="Royal Gala" pluCode="0000" />
				<ProductItem title="Äpple" subtitle="Royal Gala" pluCode="0000" />
				<ProductItem title="Äpple" subtitle="Royal Gala" pluCode="0000" />
				<ProductItem title="Äpple" subtitle="Royal Gala" pluCode="0000" />
			</CategorizedList>
		</>
	);
}

export default Browse;
