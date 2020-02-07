import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import CardContainer from './CardContainer';

const CardContainerExtra = ({ style, bottomStyle, top, bottom }) => {
  const renderTop = () => {
    if (!top) return null;
    return <View style={styles.containerTopSlot}>{top}</View>;
  };

  const renderBottom = () => {
    if (!bottom) return null;
    return <View style={bottomStyle}>{bottom}</View>;
  };

  return (
    <CardContainer style={[styles.cardContainerExtra, style]}>
      {renderTop()}
      {renderBottom()}
    </CardContainer>
  );
};
export default CardContainerExtra;
