import React from 'react';
import { RefreshControl } from 'react-native';
import { Colors } from '../../styles';

const AppRefreshControl = ({
  onRefresh = () => {},
  isRefreshing = false,
  title,
}) => (
  <RefreshControl
    refreshing={isRefreshing}
    onRefresh={onRefresh}
    title={title}
    tintColor={Colors.primaryColor.dark}
    titleColor={Colors.primaryColor.dark}
  />
);

export default AppRefreshControl;
