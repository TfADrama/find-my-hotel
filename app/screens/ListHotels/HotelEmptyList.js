import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Spacing, Colors, Typography } from '../../styles';
import { EMPTY_LIST_TITLE } from './strings';
import hotelIcon from '../../assets/icons/hotel/baseline_hotel_white_36pt.png';

const HotelEmptyList = () => (
  <View style={styles.container}>
    <Image style={styles.img} source={hotelIcon} />
    <Text style={styles.text}>{EMPTY_LIST_TITLE}</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...Typography.title1,
    color: Colors.primaryColor.dark,
  },
  img: {
    marginBottom: Spacing.MAX_SPACING,
  },
});

export default HotelEmptyList;
