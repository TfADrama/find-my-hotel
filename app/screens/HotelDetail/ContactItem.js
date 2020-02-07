import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors, Spacing, Typography } from '../../styles';

const ContactItem = ({ sourceImg, text, onPress }) => (
  <TouchableOpacity style={styles.contactContainer} onPress={onPress}>
    <Image source={sourceImg} style={styles.icon} />
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.MIN_SPACING,
  },
  icon: {
    tintColor: Colors.primaryColor.dark,
    marginRight: Spacing.DEFAULT_SPACING,
  },
  text: {
    ...Typography.title2,
  },
});

export default ContactItem;
