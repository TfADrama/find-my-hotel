import React from 'react';
import { Card } from '../../components/Card';
import { HOTEL_DETAIL_CONTACTS } from './strings';
import ContactItem from './ContactItem';
import CELL_PHONE_ICON from './icons/cell-phone/baseline_call_white_24pt.png';
import EMAIL_ICON from './icons/email/baseline_email_white_24pt.png';
import { Linking } from 'react-native';

const HotelDetailContact = ({ style, email, phoneNumber }) => {
  if (!email && !phoneNumber) return null;
  return (
    <Card title={HOTEL_DETAIL_CONTACTS} style={style}>
      <ContactItem
        sourceImg={EMAIL_ICON}
        text={email}
        onPress={() => Linking.openURL(`mailto:${email}`)}
      />
      <ContactItem
        sourceImg={CELL_PHONE_ICON}
        text={phoneNumber}
        onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
      />
    </Card>
  );
};

export default HotelDetailContact;
