import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faPenToSquare, faBarcode, faRotateLeft } from "@fortawesome/free-solid-svg-icons";

import apple from "../media/apple.jpg";
import "../css/ProductOverview.css";
import Header from "../components/Header";
import WidgetBox from "./WidgetBox";
import SwipableWidgetBox from "./SwipableWidgetBox";

function ProductOverview() {

	const navigate = useNavigate();

	return (
		<div className="productOverview">
			<Header title="Produktöversikt" icon={faPenToSquare} />
			<WidgetBox className="productName">
				<FontAwesomeIcon icon={faBox} />
				<div>
					<h2>Äpple</h2>
					<h3>Royal Gala</h3>
				</div>
			</WidgetBox>
			<WidgetBox className="productImage" style={{backgroundImage: `url(${apple})`}} />

			<SwipableWidgetBox>
				<div className="PLUWidget">
					<FontAwesomeIcon icon={faBarcode} />
					<div>00 001</div>
				</div>
				<div className="PLUWidget">
					<FontAwesomeIcon icon={faBarcode} />
					<div>00 002</div>
				</div>
				<div className="PLUWidget">
					<FontAwesomeIcon icon={faBarcode} />
					<div>00 003</div>
				</div>
			</SwipableWidgetBox>
			<WidgetBox className="productReturn" onClick={() => navigate(-1)}>
				<FontAwesomeIcon icon={faRotateLeft} />
				<div>Återgå</div>
			</WidgetBox>
		</div>
	);
}

export default ProductOverview;
