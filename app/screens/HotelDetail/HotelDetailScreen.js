import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HOTEL_DETAIL_DEFAULT_HEADER } from './strings';
import HotelDetailInfo from './HotelDetailInfo';
import { Colors, Spacing } from '../../styles';
import { getRatingText, formatCheckInToRender } from './helper';
import HotelDetailContact from './HotelDetailContact';
import HotelDetailCheckIn from './HotelDetailCheckIn';
import HotelDetailLocation from './HotelDetailLocation';
import HotelDetailImageGallery from './HotelDetailImageGallery';

class HotelDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const hotel = navigation.getParam('hotel', {});

    return { title: hotel.name || HOTEL_DETAIL_DEFAULT_HEADER };
  };

  render() {
    const { navigation } = this.props;
    const hotel = navigation.getParam('hotel', {});
    if (!hotel) return null;

    const {
      name,
      stars,
      userRating,
      contact,
      location,
      checkIn,
      checkOut,
      images,
    } = hotel;
    const ratingText = getRatingText(userRating);

    const { email, phoneNumber } = contact;
    const { address, city, latitude, longitude } = location;
    const newCheckIn = formatCheckInToRender(checkIn);
    const newCheckOut = formatCheckInToRender(checkOut);

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <HotelDetailImageGallery data={images} />
          <HotelDetailInfo
            title={name}
            stars={stars}
            ratingNumber={userRating}
            ratingText={ratingText}
          />
          <View style={styles.cardsContainer}>
            <HotelDetailCheckIn
              style={styles.card}
              checkIn={newCheckIn}
              checkOut={newCheckOut}
            />
            <HotelDetailLocation
              style={styles.card}
              address={address}
              city={city}
              longitude={longitude}
              latitude={latitude}
            />
            <HotelDetailContact
              style={styles.card}
              email={email}
              phoneNumber={phoneNumber}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor.normal,
  },
  cardsContainer: {
    marginHorizontal: Spacing.DEFAULT_SPACING,
    marginVertical: Spacing.MAX_SPACING,
  },
  card: {
    marginBottom: Spacing.MAX_SPACING,
  },
});

export default HotelDetailScreen;
