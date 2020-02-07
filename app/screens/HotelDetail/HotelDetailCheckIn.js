import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from '../../components/Card';
import {
  HOTEL_DETAIL_CHECKIN_CHECKOUT,
  HOTEL_DETAIL_CHECKIN,
  HOTEL_DETAIL_CHECKOUT,
} from './strings';
import { Spacing, Colors } from '../../styles';
import CheckInItem from './CheckInItem';

const HotelDetailCheckIn = ({ style, checkIn, checkOut }) => {
  if (!checkIn && !checkOut) return null;

  return (
    <Card
      title={HOTEL_DETAIL_CHECKIN_CHECKOUT}
      style={[styles.container, style]}>
      <View style={styles.checkContainer}>
        <CheckInItem
          title={HOTEL_DETAIL_CHECKIN}
          from={checkIn.from}
          to={checkIn.to}
        />
        <View style={styles.separator} />
        <CheckInItem
          title={HOTEL_DETAIL_CHECKOUT}
          from={checkOut.from}
          to={checkOut.to}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Spacing.MAX_SPACING,
  },
  checkContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },

  separator: {
    width: 4,
    height: 50,
    backgroundColor: Colors.primaryColor.normal,
  },
});

export default HotelDetailCheckIn;
