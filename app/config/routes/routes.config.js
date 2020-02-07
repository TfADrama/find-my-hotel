import { Colors, Typography } from '../../styles';

export const defaultNavigationOptions = {
  headerTintColor: Colors.primaryColor.light,
  headerStyle: {
    backgroundColor: Colors.secondaryColor.light,
  },
  headerTitleStyle: {
    ...Typography.headerTitle,
  },
  headerTitleAlign: 'center',
};
