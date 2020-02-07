import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Colors, Spacing } from '../../styles';
import cameraIcon from './icons/camera/baseline_camera_alt_white_24pt.png';

const ImageTotal = ({ style, total }) => (
  <View style={[styles.imageCount, style]}>
    <Image style={styles.icon} source={cameraIcon} resizeMode="contain" />
    <Text style={styles.imageCountText}>{total}</Text>
  </View>
);

const styles = StyleSheet.create({
  imageCount: {
    flexDirection: 'row',
    backgroundColor: Colors.primaryColor.dark,
    padding: Spacing.MIN_SPACING,
    borderRadius: Spacing.DEFAULT_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    margin: Spacing.DEFAULT_SPACING,
  },
  imageCountText: {
    color: Colors.primaryColor.light,
    marginLeft: 3,
  },
  icon: {
    height: 20,
  },
});

export default ImageTotal;
