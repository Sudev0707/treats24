import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import RowColStyles from '../../theme/RowColStyles';

const UserAddressStyle = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 20,
    // borderWidth: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    // flex: 1,
    paddingHorizontal: 15,
    // paddingTop: 20,
    borderRadius: 20,
    paddingBottom: 50,
    backgroundColor: colors.backgroundSoft,
    // borderWidth: 1,
    height: '100%',
  },
   userDetailContainer: {
    // flex: 1,
    // borderWidth: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
    paddingHorizontal: 20,
    // borderTopStartRadius: 30,
    // borderTopEndRadius: 30,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 1,
    marginTop:4
  },
});

export default UserAddressStyle;
