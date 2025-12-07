import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const DashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    // borderWidth:1
  },
 headerWrapper: {
  backgroundColor: colors.background, // same as root background
  paddingTop: 0,
  // bottom shadow here
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.12,
  shadowRadius: 8,
  elevation: 8, // Android shadow
},

mainDashboardHeader: {
  paddingTop: 6,
  paddingBottom: 18,
  paddingHorizontal: 16,
  backgroundColor: colors.background,

  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
},

  dashboardHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    // paddingHorizontal: 16,
    paddingVertical: 12,
    // backgroundColor: 'red',
    // borderBottomWidth: 1,
    marginBottom: 9,
    borderBottomColor: colors.borderMuted,
  },
  dashboardHeaderLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  dashboardHeaderRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTextGroup: {
    flex: 1,
  },
  welcomeText: {
    fontSize: fonts.size.md,
    color: colors.textSecondary,
  },
  userName: {
    fontSize: fonts.size['2xl'],
    fontWeight: fonts.weight.bold,
    color: colors.textPrimary,
    marginTop: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  locationLabel: {
    fontSize: fonts.size.sm,
    color: colors.textMuted,
    marginRight: 4,
  },
  locationValue: {
    fontSize: fonts.size.sm,
    color: colors.textPrimary,
    fontWeight: fonts.weight.medium,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.brandPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.textOnBrand,
    fontWeight: fonts.weight.bold,
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
  searchPlaceholder: {
    flex: 1,
    fontSize: fonts.size.md,
    color: colors.textMuted,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: fonts.size.xl,
    fontWeight: fonts.weight.bold,
    color: colors.textPrimary,
  },
  sectionAction: {
    fontSize: fonts.size.sm,
    color: colors.brandPrimary,
    fontWeight: fonts.weight.medium,
  },
  chipsRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: colors.muted,
    marginRight: 8,
  },
  chipActive: {
    backgroundColor: colors.brandPrimary,
  },
  chipText: {
    fontSize: fonts.size.sm,
    color: colors.textSecondary,
    fontWeight: fonts.weight.medium,
  },
  chipTextActive: {
    color: colors.textOnBrand,
  },
  restaurantCard: {
    width: 220,
    marginRight: 14,
    borderRadius: 16,
    backgroundColor: colors.card,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  restaurantImagePlaceholder: {
    height: 120,
    backgroundColor: colors.borderMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantImageText: {
    fontSize: fonts.size.sm,
    color: colors.textSecondary,
  },
  restaurantInfo: {
    padding: 12,
  },
  restaurantName: {
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.bold,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  restaurantMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    fontSize: fonts.size.sm,
    color: colors.brandPrimary,
    marginRight: 8,
    fontWeight: fonts.weight.semibold,
  },
  dotSeparator: {
    width: 3,
    height: 3,
    borderRadius: 999,
    backgroundColor: colors.divider,
    marginHorizontal: 4,
  },
  metaText: {
    fontSize: fonts.size.sm,
    color: colors.textSecondary,
  },
  priceText: {
    fontSize: fonts.size.sm,
    color: colors.textPrimary,
    fontWeight: fonts.weight.medium,
    marginTop: 2,
  },
  deliveryTag: {
    marginTop: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    alignSelf: 'flex-start',
    backgroundColor: colors.successSoft,
  },

  addressWrapper: {
    flex: 1,
  },
  deliveryTagText: {
    fontSize: fonts.size.xs,
    color: colors.success,
    fontWeight: fonts.weight.medium,
  },
  horizontalList: {
    marginBottom: 24,
  },
  nearbyList: {
    marginBottom: 8,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  addressText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 4,
  },

  deliverySubtitle: {
    fontSize: 13,
    color: '#6D6D6D',
    marginTop: -2,
  },

  // avatar: {
  //   width: 42,
  //   height: 42,
  //   borderRadius: 21,
  //   backgroundColor: '#FF7A00',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },

  // avatarText: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: '#fff',
  // },
});

export default DashboardStyles;
