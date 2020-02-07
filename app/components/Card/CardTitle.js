import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const CardTitle = ({ text }) => {
  if (!text) return null;

  return <Text style={styles.cardTitle}>{text}</Text>;
};
export default CardTitle;
