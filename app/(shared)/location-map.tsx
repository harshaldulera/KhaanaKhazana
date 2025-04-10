import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import LocationMapView from './MapView';

export default function LocationMapScreen() {
  const params = useLocalSearchParams();
  
  const latitude = parseFloat(params.latitude as string);
  const longitude = parseFloat(params.longitude as string);
  const title = params.title as string;
  const description = params.description as string;

  return (
    <LocationMapView
      latitude={latitude}
      longitude={longitude}
      title={title}
      description={description}
    />
  );
} 