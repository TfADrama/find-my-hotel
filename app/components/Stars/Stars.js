import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Colors } from '../../styles';

const starImage = require('./icons/grade/baseline_grade_white_24pt.png');

const Stars = ({ number, style }) => {
  if (!number) return null;

  const starsArray = [];

  for (let i = 0; i < number; i += 1) {
    const star = <Image key={i} style={styles.starImg} source={starImage} />;
    starsArray.push(star);
  }
  return <View style={[styles.starsContainer, style]}>{starsArray}</View>;
};

const styles = StyleSheet.create({
  starImg: {
    height: 20,
    width: 20,
    tintColor: Colors.starColor,
  },
  starsContainer: {
    height: 20,
    flexDirection: 'row',
  },
});

export default Stars;
