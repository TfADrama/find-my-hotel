import React from 'react';
import CardContainer from './CardContainer';
import CardTitle from './CardTitle';

const Card = ({ title, children, style }) => (
  <>
    <CardTitle text={title} />
    <CardContainer style={style}>{children}</CardContainer>
  </>
);
export default Card;
