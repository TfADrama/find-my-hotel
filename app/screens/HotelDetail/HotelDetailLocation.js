import React from 'react';
import { CardMap } from '../../components/Card';
import { Text, StyleSheet } from 'react-native';
import { HOTEL_DETAIL_LOCATION } from './strings';
import { body1 } from '../../styles/typography';

const HotelDetailLocation = ({ style, address, city, latitude, longitude }) => {
  return (
    <CardMap
      style={style}
      title={HOTEL_DETAIL_LOCATION}
      latitude={latitude}
      longitude={longitude}>
      <Text style={styles.text}>{address}</Text>
      <Text>{city}</Text>
    </CardMap>
  );
};

const styles = StyleSheet.create({
  text: {
    ...body1,
  },
});

export default HotelDetailLocation;
