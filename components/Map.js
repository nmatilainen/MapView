import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

const Map = () => {
  const [location, setLocation] = useState({
    latitude: 65.0121,
    longitude: 25.4651,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    const getLocationAsync = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          console.log('Permission to access location was denied');
          return;
        }

        const locationData = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = locationData.coords;

        setLocation({
          latitude,
          longitude,
          latitudeDelta: 0.025,
          longitudeDelta: 0.0005,
        });
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    getLocationAsync();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={location}>
        {/* You can add map markers or other components here */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;
