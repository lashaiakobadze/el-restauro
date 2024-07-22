'use client';

import { useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { Location } from '@/common/types/location.type';
import MapLocation from '../MapLocation/MapLocation';

// Map's styling
const defaultMapContainerStyle = {
  width: '100%',
  height: '100vh',
};

// Coordinates of the default center of the map
const defaultMapCenter = { lat: 41.693, lng: 44.801 };

// Default zoom level, can be adjusted
const defaultMapZoom = 16;

// Map options
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  mapTypeId: 'roadmap',
};

const locations: Location[] = [
  {
    position: { lat: 41.693, lng: 44.801 },
    content: <MapLocation />,
  },
  // Add more locations as needed
];

const MapComponent = () => {
  const [selectedMarker, setSelectedMarker] = useState<Location>();

  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.position}
            onClick={() => setSelectedMarker(location)}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={() => setSelectedMarker(undefined)}
          >
            <div>{selectedMarker.content}</div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
