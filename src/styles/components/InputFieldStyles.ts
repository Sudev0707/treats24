import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderColor: '#DADADA',
    borderRadius: 12,
    height: 58,
    paddingHorizontal: 14,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    marginVertical: 10,
  },

  input: {
    fontSize: 15,
    color: '#000',
    height: '100%', // ⬅ makes placeholder + text perfectly vertical center
  },

  label: {
    // borderWidth:1,
    position: 'absolute',
    left: 13,
    backgroundColor: '#FFF',
    paddingHorizontal: 6,
    zIndex: 10,
    color: colors.brandPrimary,
  },

  active: {
    borderWidth: 2.5,
    borderColor: colors.brandPrimary,
  },

  icon: {
    position: 'absolute',
    right: 14,
    top: 18,
  },
  errorText: {
  color: 'red',
  fontSize: 12,
  marginTop: 4,
  marginLeft: 10,
},
});
