import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CardImage } from '../../components/Card';
import Stars from '../../components/Stars/Stars';
import Rating from '../../components/Rating/Rating';
import { Spacing, Typography, Colors } from '../../styles';
import hotelIcon from '../../assets/icons/hotel/baseline_hotel_white_36pt.png';

const HotelItem = ({ item, style }) => {
  if (!item) return null;

  let { images, userRating, stars, name } = item;

  let coverImgURL;
  const imagesArray = Array.isArray(images) ? images : [];

  if (imagesArray.length > 0) {
    coverImgURL = imagesArray[0];
  }

  return (
    <CardImage
      imageURL={coverImgURL}
      childrenContainerStyle={styles.hotelInfoContainer}
      style={style}
      placeholderSource={hotelIcon}>
      <View style={styles.leftContainer}>
        <Text
          style={styles.hotelNameLabel}
          ellipsizeMode="tail"
          numberOfLines={1}>
          {name}
        </Text>
        <Stars number={stars} />
      </View>
      <Rating
        rate={userRating}
        style={styles.ratingContainer}
        textStyle={styles.ratingTextStyle}
      />
    </CardImage>
  );
};

const styles = StyleSheet.create({
  hotelInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },
  leftContainer: {
    flexShrink: 2,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  ratingTextStyle: {
    fontWeight: 'bold',
    color: Colors.primaryColor.light,
  },
  hotelNameLabel: {
    ...Typography.title1,
    marginTop: Spacing.DEFAULT_SPACING,
    marginBottom: 2,
    marginLeft: 3, // illusion margin to mach the first star
  },
});

export default HotelItem;
