import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FilterButton from './FilterButton';
import { Colors, Typography, Spacing } from '../../styles';
import { FILTER_HOTEL_TITLE } from './strings';
import { RANKINGS_ARRAY } from '../../utils/helper';

const FilterHotelScreen = ({ navigation }) => {
  const renderFilterBtns = () => {
    const renderArray = RANKINGS_ARRAY.map((rank, index) => (
      <FilterButton
        key={rank}
        title={rank}
        style={styles.button}
        onPress={() => {
          const onFilterBtnPress = navigation.getParam('onFilterBtnPress');
          if (onFilterBtnPress) {
            navigation.goBack();
            onFilterBtnPress(index);
          }
        }}
      />
    ));
    return renderArray;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{`${FILTER_HOTEL_TITLE}:`}</Text>
      <View style={styles.childContainer}>{renderFilterBtns()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor.normal,
  },
  childContainer: {
    alignItems: 'flex-start',
    margin: Spacing.MAX_SPACING,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    ...Typography.title1,
    marginLeft: Spacing.MAX_SPACING,
    marginTop: Spacing.MAX_SPACING,
  },
  button: {
    marginHorizontal: Spacing.MIN_SPACING,
    marginBottom: Spacing.DEFAULT_SPACING,
  },
});

export default FilterHotelScreen;
