import { Platform } from 'react-native';

let LocationMapView;

if (Platform.OS === 'web') {
  LocationMapView = require('./MapView.web').default;
} else {
  LocationMapView = require('./MapView.native').default;
}

export default LocationMapView; 