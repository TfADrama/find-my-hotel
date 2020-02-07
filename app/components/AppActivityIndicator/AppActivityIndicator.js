import React from 'react';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import { OverlayView } from '.';
import { Colors, Spacing, Typography } from '../../styles';

const AppActivityIndicator = ({ text }) => (
  <OverlayView isTransparent>
    <ActivityIndicator
      animating
      size="large"
      color={Colors.primaryColor.dark}
    />
    <Text style={styles.text}>{text}</Text>
  </OverlayView>
);

export default AppActivityIndicator;

const styles = StyleSheet.create({
  text: {
    ...Typography.title1,
    color: Colors.primaryColor.dark,
    marginTop: Spacing.DEFAULT_SPACING,
  },
});
