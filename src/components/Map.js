import React from 'react';
import { compose, withProps } from 'recompose';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';


const API_KEY = process.env.GATSBY_GOOGLE_MAPS_API_KEY;
const MyMapComponent = compose(
  withProps({
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => {
  return (
    <GoogleMap defaultZoom={15} center={{ lat: 59.913181, lng: 10.742738 }}>
      <Marker
        position={{ lat: 59.913281, lng: 10.742774 }}
      />
    </GoogleMap>
  );
});

export default MyMapComponent;
