import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export const RestaurantScreenStyle = StyleSheet.create({
  headerTop: {
    paddingTop: 50,
    height: 450,
    zIndex: 4,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    overflow:'hidden'
  },
  headerImage: {
    height: 450,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    // flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
  },
  // ==
  topGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 120, // small top fade
  },

  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingBottom: 24,
  },

  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding:20 ,
    // alignItems: 'flex-end',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
  },
  ratingBox: {
    backgroundColor: '#1faa59',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 10,
  },
  ratingText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  placeName: {
    color: '#ddd',
    fontSize: 15,
    fontWeight: 800,
  },
  distance: {
    color: '#ccc',
    fontSize: 15,
    fontWeight: 800,
  },
  categoryText:{
  color: '#ccc',
  },

  distanceRow: {
    marginTop: 6,
  },
  imageBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
  },
});
