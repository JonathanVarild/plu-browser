import React from "react";

import "./css/global.css";

import Navbar from "./components/Navbar";
import Browse from "./pages/Browse";
import ProductOverview from "./components/ProductOverview";

function App() {
	return (
		<>
			<Navbar />
			<Browse />
		</>
	);
}

export default App;
