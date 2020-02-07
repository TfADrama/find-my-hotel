import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../../styles';

const Rating = ({ rate, style, textStyle }) => {
  if (!rate) return null;
  return (
    <View style={[styles.ratingContainer, style]}>
      <Text style={[styles.rateText, textStyle]}>{rate}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  ratingContainer: {
    backgroundColor: Colors.secondaryColor.light,
    borderTopRightRadius: Spacing.DEFAULT_RADIUS,
    borderBottomRightRadius: Spacing.DEFAULT_RADIUS,
    borderBottomLeftRadius: Spacing.DEFAULT_RADIUS,
  },
  rateText: {
    ...Typography.title2,
    margin: 5,
    color: Colors.primaryColor.light,
  },
});

export default Rating;
