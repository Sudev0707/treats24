import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export const cartStyle = StyleSheet.create({
  headerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  container: {
    flex: 1,
    // backgroundColor: colors.backgroundSoft,
  },
   emptyText: {
    // textAlign: 'center',
    // marginTop: 40,
    // color: '#777',
    // fontSize: 16,
  },
});
