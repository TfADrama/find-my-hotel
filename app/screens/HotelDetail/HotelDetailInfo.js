import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors, Spacing, Typography } from '../../styles';
import { title1 } from '../../styles/typography';
import Stars from '../../components/Stars/Stars';
import Rating from '../../components/Rating/Rating';

const HotelDetailInfo = ({ style, title, stars, ratingNumber, ratingText }) => (
  <View style={[styles.container, style]}>
    <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
      {title}
    </Text>
    <Stars number={stars} style={styles.stars} />
    <View style={styles.ratingContainer}>
      {ratingText && <Text style={styles.ratingText}>{ratingText}</Text>}
      <Rating rate={ratingNumber} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: Colors.secondaryColor.dark,
    padding: Spacing.MAX_SPACING,
  },
  title: {
    ...title1,
    color: Colors.primaryColor.light,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    alignSelf: 'flex-end',
  },
  ratingText: {
    marginHorizontal: Spacing.DEFAULT_SPACING,
    color: Colors.secondaryColor.light,
    ...Typography.title2,
  },
  stars: {
    marginVertical: Spacing.MIN_SPACING,
  },
});

export default HotelDetailInfo;
