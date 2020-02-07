import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const CardContainer = ({ children, style }) => (
  <View style={[styles.cardContainer, style]}>{children}</View>
);
export default CardContainer;
