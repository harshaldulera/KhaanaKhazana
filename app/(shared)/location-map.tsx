import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import LocationMapView from './MapView';

export default function LocationMapScreen() {
  const params = useLocalSearchParams();
  
  const latitude = parseFloat(params.latitude as string);
  const longitude = parseFloat(params.longitude as string);
  const title = params.title as string;
  const description = params.description as string;
  const destinationLatitude = params.destinationLatitude ? parseFloat(params.destinationLatitude as string) : undefined;
  const destinationLongitude = params.destinationLongitude ? parseFloat(params.destinationLongitude as string) : undefined;
  const showRoute = params.showRoute === "true";
  const updateInterval = params.updateInterval ? parseInt(params.updateInterval as string) : 5000;

  return (
    <LocationMapView
      latitude={latitude}
      longitude={longitude}
      title={title}
      description={description}
      destinationLatitude={destinationLatitude}
      destinationLongitude={destinationLongitude}
      showRoute={showRoute}
      updateInterval={updateInterval}
    />
  );
} 