import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const TextHeaderStyles = StyleSheet.create({
  primary: {
    fontWeight: '900',
    fontSize: 18,
    color: colors.brandPrimary,
    marginBottom: 12,
  },
  secondary: {
    fontWeight: '800',
    fontSize: 14,
    color: colors.textPrimary,
    marginBottom: 10,
  },
  tertiary: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  labeled: {
    fontSize: 14,
    color: colors.brandPrimary,
    // marginBottom: 6,
    paddingLeft: 4,
    fontWeight: '800',
    // borderWidth: 1.5,
  },
});

export default TextHeaderStyles;
