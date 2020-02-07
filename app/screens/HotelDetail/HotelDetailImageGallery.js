import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ProgressiveImage } from '../../components/ProgressiveImage';
import hotelIcon from '../../assets/icons/hotel/baseline_hotel_white_36pt.png';
import ImageTotal from './ImageTotal';

const { width: screenWidth } = Dimensions.get('window');

const HotelDetailImageGallery = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <ProgressiveImage
        style={styles.imageContainer}
        source={{
          uri: item,
        }}
        placeholderSource={hotelIcon}
      />
    );
  };

  const keyExtractor = item => item;

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <ImageTotal style={styles.imageTotal} total={data.length} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
  },
  imageContainer: {
    flex: 1,
    width: screenWidth,
  },
  imageTotal: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
});

export default HotelDetailImageGallery;
