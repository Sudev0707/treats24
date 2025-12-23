import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export const RestaurantScreenStyle = StyleSheet.create({
  headerTop: {
    paddingTop: 50,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    height:450,
    //  zIndex:4
  },
  headerImage: {
    height: 450,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
     flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
  },
  // ==
   gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 14,
    alignItems: 'flex-end',
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
    fontSize: 18,
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
    fontSize: 10,
  },
    placeName: {
    color: '#ddd',
    fontSize: 10,
    fontWeight: 800,
  },
 distance: {
    color: '#ccc',
    fontSize: 10,
    fontWeight: 800,
  },
  
  distanceRow: {
    marginTop: 6,
  },
});
