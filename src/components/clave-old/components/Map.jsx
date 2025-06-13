import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const API_KEY = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY;

const containerStyle = {
	height: "400px",
};

const kongensGate = { lat: 59.9104989, lng: 10.7421957 };
const rebel = { lat: 59.9173786, lng: 10.7375431};
const office = rebel;

function Map() {
	return (
		<LoadScript googleMapsApiKey={API_KEY}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={office}
				zoom={15}
				options={{}}
			>
				<Marker position={office} />
			</GoogleMap>
		</LoadScript>
	);
}

export default React.memo(Map);
