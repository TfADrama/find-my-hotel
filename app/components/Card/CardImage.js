import React from 'react';
import styles from './styles';
import CardContainerExtra from './CardContainerExtra';
import { ProgressiveImage } from '../ProgressiveImage';

const CardImage = ({
  imageURL,
  children,
  childrenContainerStyle,
  style,
  placeholderSource,
}) => (
  <CardContainerExtra
    style={style}
    top={
      <ProgressiveImage
        style={styles.imgContainer}
        sourceImgStyle={styles.img}
        source={{
          uri: imageURL,
        }}
        placeholderSource={placeholderSource}
      />
    }
    bottom={children}
    bottomStyle={childrenContainerStyle}
  />
);

export default CardImage;
