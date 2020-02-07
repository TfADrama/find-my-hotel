import { Colors, Spacing, Typography } from '../../styles';
import { StyleSheet } from 'react-native';

const containerTopSlotHeight = 200;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.primaryColor.light,
    flex: 1,
    borderRadius: Spacing.DEFAULT_RADIUS,
    padding: Spacing.DEFAULT_SPACING,
  },
  containerTopSlot: {
    height: containerTopSlotHeight,
  },
  cardTitle: {
    ...Typography.title1,
    margin: Spacing.DEFAULT_SPACING,
  },
  imgContainer: {
    marginTop: -Spacing.DEFAULT_SPACING,
    marginLeft: -Spacing.DEFAULT_SPACING,
    marginRight: -Spacing.DEFAULT_SPACING,
    borderTopLeftRadius: Spacing.DEFAULT_RADIUS,
    borderTopRightRadius: Spacing.DEFAULT_RADIUS,
    flex: 1,
  },
  img: {
    borderTopLeftRadius: Spacing.DEFAULT_RADIUS,
    borderTopRightRadius: Spacing.DEFAULT_RADIUS,
  },
  map: {
    height: containerTopSlotHeight,
    alignSelf: 'stretch',
    marginTop: -Spacing.DEFAULT_SPACING + 1, // plus 1 to handle map bug not bending to radius
    marginLeft: -Spacing.DEFAULT_SPACING + 1,
    marginRight: -Spacing.DEFAULT_SPACING + 1,
  },
});

export default styles;
