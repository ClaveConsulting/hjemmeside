import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';


const API_KEY = import.meta.env.GATSBY_GOOGLE_MAPS_API_KEY;

const containerStyle = {
    height: '400px'
};

const center = { lat: 59.9104989, lng: 10.7421957 };

function MyComponent() {
    return (
        <LoadScript googleMapsApiKey={API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                options={{}}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
}

export default React.memo(MyComponent);
