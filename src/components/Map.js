import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


const API_KEY = process.env.GATSBY_GOOGLE_MAPS_API_KEY;
// const MyMapComponent = compose(
//   withProps({
//     googleMapURL:
//       `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap,
// )(props => {
//   return (
//     <GoogleMap defaultZoom={15} center={{ lat: 59.9104989, lng: 10.7421957 }}>
//       <Marker
//         position={{ lat: 59.9104989, lng: 10.7421957 }}
//       />
//     </GoogleMap>
//   );
// });

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker
                position={{ lat: 59.9104989, lng: 10.7421957 }}
            />
        </GoogleMap>
    ) : <></>
}

export default React.memo(MyComponent)
