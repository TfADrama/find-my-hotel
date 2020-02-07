import React from 'react';
import { StyleSheet, Platform, RefreshControl } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import HotelItem from './HotelItem';
import { Spacing } from '../../styles';
import { AppRefreshControl } from '../../components/AppRefreshControl';
import { PTR_TITLE } from './strings';
import HotelEmptyList from './HotelEmptyList';

const HotelList = ({
  data,
  style,
  isRefreshing = false,
  onRefresh = () => {},
  onPressItem,
}) => {
  return (
    <FlatList
      contentInset={{ bottom: Spacing.DEFAULT_SPACING }} // iOS only
      style={[styles.list, style]}
      data={data}
      renderItem={({ item }) => renderItem(item, onPressItem)}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<HotelEmptyList />}
      refreshControl={Platform.select({
        // Android is not recognizing the custom component
        ios: (
          <AppRefreshControl
            onRefresh={onRefresh}
            isRefreshing={isRefreshing}
            title={PTR_TITLE}
          />
        ),
        android: (
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={isRefreshing}
            title={PTR_TITLE}
          />
        ),
      })}
      contentContainerStyle={{ flexGrow: 1 }} // Added to center the empty list component
    />
  );
};
const renderItem = (item, onPress) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(item.id)}
      style={styles.itemContainer}>
      <HotelItem style={styles.item} item={item} />
    </TouchableOpacity>
  );
};
const keyExtractor = item => item.id.toString();

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  item: {
    marginTop: Spacing.DEFAULT_SPACING,
  },
  itemContainer: {
    flex: 1,
  },
});

export default HotelList;
