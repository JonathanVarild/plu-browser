import React from "react";

import "./css/global.css";

import Navbar from "./components/Navbar";
import Browse from "./routes/Browse";
import ProductOverview from "./components/ProductOverview";

function App() {
	return (
		<>
			<Navbar />
			<ProductOverview />
		</>
	);
}

export default App;
