import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Spacing, Colors, Typography } from '../../styles';

const FilterButton = ({ title, style, onPress }) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: Spacing.DEFAULT_RADIUS,
    backgroundColor: Colors.secondaryColor.dark,
    paddingHorizontal: Spacing.MAX_SPACING,
    paddingVertical: Spacing.MIN_SPACING,
  },
  text: {
    ...Typography.title2,
    color: Colors.primaryColor.light,
  },
});
export default FilterButton;
