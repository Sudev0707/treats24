import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    // padding: 20,
    paddingBottom: 50,
    backgroundColor: colors.backgroundSoft,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 20,
    // borderWidth: 1,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.brandPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.textOnBrand,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  menuSection: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderMuted,
  },
  menuItemText: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  menuItemArrow: {
    fontSize: 24,
    color: colors.textMuted,
  },
  logoutButton: {
    marginTop: 30,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: colors.danger,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textOnBrand,
  },
  contentContainer: {
    flex: 1,
    // borderWidth: 1,
    paddingHorizontal: 20,
  },
  viewContainer: {
    borderWidth: 1,
    // padding:20,
    borderRadius: 10,
    //  backgroundColor: '#fff',
    overflow: 'hidden',
  },

  //

  versionContainer: {
    marginTop: 30,
    paddingVertical: 14,
    paddingHorizontal: 16,
    // backgroundColor: "#f7f7f7",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  versionText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 2,
  },
  versionNumber: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
});

export default ProfileStyles;
