import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Spacing, Typography } from '../../styles';

const renderCheckInInfo = ({ title, from, to }) => {
  const { hour: fHour, clockFormat: fClockFormat } = from;
  const { hour: tHour, clockFormat: tClockFormat } = to;

  return (
    <View style={styles.checkInfo}>
      <Text style={styles.label}>{title}</Text>
      <Text>
        <Text>{fHour}</Text>
        <Text style={styles.clockFormat}>{` ${fClockFormat}`}</Text>
        {' - '}
        <Text>{tHour}</Text>
        <Text style={styles.clockFormat}>{` ${tClockFormat}`}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  clockFormat: {
    fontSize: 10,
    fontWeight: 'bold',
  },

  label: {
    ...Typography.title2,
    textAlign: 'center',
    marginBottom: Spacing.MIN_SPACING,
  },
});

export default renderCheckInInfo;
