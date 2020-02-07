import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HotelList from './HotelList';
import { fetchHotels } from '../../api/hotelsAPI';
import { Colors, Spacing } from '../../styles';
import AppActivityIndicator from '../../components/AppActivityIndicator/AppActivityIndicator';
import { LOADING_HOTELS, HEADER_TITLE } from './strings';
import HotelListHeader from './HotelListHeader';
import { sortHotelByUserRating } from './helper';
import { getRatingText } from '../HotelDetail/helper';
import { RANKINGS_ARRAY } from '../../utils/helper';

class ListHotelsScreen extends Component {
  static navigationOptions = {
    title: HEADER_TITLE,
  };

  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      filteredHotels: [],
      isLoading: true,
      isRefreshing: false,
      isAscendingSort: false,
    };
  }

  async componentDidMount() {
    // TODO: Memory leak if user closes this screen while fetching
    const hotels = await fetchHotels();
    this.setState({ hotels, filteredHotels: hotels, isLoading: false });
  }

  onRefresh = async () => {
    this.setState({ isRefreshing: true });
    const hotels = await fetchHotels();
    this.setState({ hotels, filteredHotels: hotels, isRefreshing: false });
  };

  onPressItem = id => {
    const { navigation } = this.props;
    const { filteredHotels } = this.state;

    const selectedHotel = filteredHotels.find(hotel => hotel.id === id);
    if (!selectedHotel) return;

    navigation.navigate('HotelDetail', { hotel: selectedHotel });
  };

  onSort = () => {
    const { filteredHotels, isAscendingSort } = this.state;
    if (filteredHotels.length < 2) return;

    const sortedHotels = sortHotelByUserRating(filteredHotels, isAscendingSort);
    this.setState({
      filteredHotels: sortedHotels,
      isAscendingSort: !isAscendingSort,
    });
  };

  onFilter = () => {
    const { hotels } = this.state;
    const { navigation } = this.props;
    if (hotels.length < 1) return;

    const onFilterBtnPress = index => {
      const filteredHotels = hotels.filter(hotel => {
        const key = getRatingText(hotel.userRating);
        return key === RANKINGS_ARRAY[index];
      });

      this.setState({ filteredHotels });
    };

    navigation.navigate('Filter', { onFilterBtnPress });
  };

  renderHotelList = () => {
    const { filteredHotels, isLoading, isRefreshing } = this.state;
    if (isLoading) return null;

    return (
      <HotelList
        style={styles.list}
        data={filteredHotels}
        isRefreshing={isRefreshing}
        onRefresh={this.onRefresh}
        onPressItem={this.onPressItem}
      />
    );
  };

  renderAppActivityIndicator = () => {
    const { isLoading } = this.state;
    if (!isLoading) return null;

    return <AppActivityIndicator text={LOADING_HOTELS} />;
  };

  renderHotelListHeader = () => {
    const { isLoading } = this.state;
    if (isLoading) return null;

    return <HotelListHeader onSort={this.onSort} onFilter={this.onFilter} />;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderHotelListHeader()}
        {this.renderHotelList()}
        {this.renderAppActivityIndicator()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor.normal,
  },
  list: {
    marginHorizontal: Spacing.DEFAULT_SPACING,
  },
});

export default ListHotelsScreen;
