import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
container: {
  borderWidth: 1.5,
  borderColor: '#DADADA',
  borderRadius: 12,
  height: 60,
  paddingHorizontal: 14,
  justifyContent: 'center',
  backgroundColor: '#FFF',
  marginVertical:10
},

input: {
  fontSize: 16,
  color: '#000',
  height: '100%',            // ⬅ makes placeholder + text perfectly vertical center
},

label: {
                   
  // borderWidth:1,
  position: 'absolute',
  left: 14,
  backgroundColor: '#FFF',
  paddingHorizontal: 4,
  zIndex: 10,
},

active: {
  borderColor: colors.brandPrimary,
},

  icon: {
    position: 'absolute',
    right: 14,
    top: 18,
  },
});
