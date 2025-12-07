import { StyleSheet, StatusBar } from 'react-native';

const HeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    // paddingTop: StatusBar.currentHeight || 20,
    backgroundColor: '#ffffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#dededeff',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
    //  borderWidth:1
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default HeaderStyles;
