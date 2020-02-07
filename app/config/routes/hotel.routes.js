import { createStackNavigator } from 'react-navigation-stack';
import { ListHotelsScreen } from '../../screens/ListHotels';
import { HotelDetailScreen } from '../../screens/HotelDetail';
import { defaultNavigationOptions } from './routes.config';
import { Typography } from '../../styles';
import FilterHotelScreen from '../../screens/FilterHotels/FilterHotelScreen';

export default createStackNavigator(
  {
    HotelList: {
      screen: ListHotelsScreen,
    },
    HotelDetail: {
      screen: HotelDetailScreen,
      navigationOptions: {
        headerBackTitleVisible: false,
        headerTitleStyle: {
          ...Typography.smallHeaderTitle,
        },
      },
    },
    Filter: {
      screen: FilterHotelScreen,
    },
  },
  {
    defaultNavigationOptions: {
      ...defaultNavigationOptions,
    },
  },
);
