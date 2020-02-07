import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Typography, Spacing, Colors } from '../../styles';
import { SORT_BY_USER_RATING, FILTER } from './strings';
import sortIcon from './icons/sort/baseline_filter_list_white_24pt.png';
import filterIcon from './icons/filter/baseline_swap_vert_white_24pt.png';

const HotelListHeader = ({ onSort, onFilter }) => (
  <View style={styles.container}>
    <ButtonWithIcon
      style={{ flexGrow: 1 }}
      title={SORT_BY_USER_RATING}
      sourceImg={sortIcon}
      onPress={onSort}
    />
    <View style={styles.separator} />
    <ButtonWithIcon
      style={{ flexGrow: 2, alignItems: 'center' }}
      title={FILTER}
      sourceImg={filterIcon}
      onPress={onFilter}
    />
  </View>
);

const ButtonWithIcon = ({ style, title, sourceImg, onPress }) => (
  <View style={style}>
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Image style={styles.icon} source={sourceImg} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  btnContainer: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...Typography.title2,
  },
  container: {
    padding: Spacing.DEFAULT_SPACING,
    flexDirection: 'row',
    backgroundColor: Colors.primaryColor.light,
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.primaryColor.dark,
  },
  separator: {
    width: 4,
    height: 20,
    backgroundColor: Colors.primaryColor.normal,
    marginHorizontal: Spacing.MAX_SPACING,
  },
  icon: {
    tintColor: Colors.primaryColor.dark,
    marginHorizontal: Spacing.MIN_SPACING,
  },
});

export default HotelListHeader;
