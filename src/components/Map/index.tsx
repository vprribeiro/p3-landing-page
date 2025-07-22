import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapProps {
    lat: number;
    lng: number;
    title: string;
}

const containerStyle = {
  width: '100%',
  height: '300px',
};

const Map: React.FC<MapProps> = ({ lat, lng, title }) => {
    const center = { lat, lng };
  
    return (
      <LoadScript googleMapsApiKey={process.env.REACT_APP_Maps_API_KEY!}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
          <Marker position={center} title={title} />
        </GoogleMap>
      </LoadScript>
    );
  };
  
  export default Map;