import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';
import CardTitle from './CardTitle';
import CardContainerExtra from './CardContainerExtra';

const CardMap = ({ style, title, latitude, longitude, children }) => {
  const renderMap = () => {
    if (!latitude && !longitude) return null;

    return (
      <MapView
        style={styles.map}
        removeClippedSubviews
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.0005,
          longitudeDelta: 0.0005,
        }}>
        <Marker coordinate={{ latitude, longitude }} />
      </MapView>
    );
  };

  return (
    <>
      <CardTitle text={title} />
      <CardContainerExtra style={style} top={renderMap()} bottom={children} />
    </>
  );
};

export default CardMap;
