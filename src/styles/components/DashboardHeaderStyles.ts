import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const DashboardHeaderStyles = StyleSheet.create({
  headerWrapper: {
    // backgroundColor: 'white',
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    // borderBottomWidth:1,
    elevation: 4,
  },

  mainDashboardHeader: {
    borderBottomWidth: 0.5,
    backgroundColor: colors.background,
    paddingTop: 9,
    paddingBottom: 18,
    paddingHorizontal: 16,
    // borderBottomLeftRadius: 26,
    // borderBottomRightRadius: 26,
    // elevation:4
  },
  dashboardHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  bottomShadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -6,
    height: 26,
    backgroundColor: 'transparent',

    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 18,
  },

  addressWrapper: {
    flex: 1,
  },

  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  addressText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.brandPrimary,
    marginRight: 2,
  },

  deliverySubtitle: {
    fontSize: 13,
    color: '#7B7B7B',
    marginTop: 2,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 42,
    backgroundColor: '#1E1E2D',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 7,
    paddingHorizontal: 1,
    paddingVertical: 1,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },

  searchInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 44,
    fontSize: 16,
    color: '#22223B',
  },
});

export default DashboardHeaderStyles;
