import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/global.css";

import Navbar from "./components/Navbar";
import Browse from "./pages/Browse";
import ProductOverview from "./components/ProductOverview";

function App() {
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route index element={<Browse />} />
					<Route path="overview" element={<ProductOverview />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
