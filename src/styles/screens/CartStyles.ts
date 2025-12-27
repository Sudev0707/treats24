import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export const cartStyle = StyleSheet.create({
  headerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
     borderRadius: 10,
    // borderWidth: 1,
  },
  productContainer: {
    // borderWidth: 1,s
    borderRadius: 10,
    backgroundColor: colors.background,
    elevation:  2,
    paddingBottom:9,
    overflow:'hidden'
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyCartText: {
    fontSize: 18,
    color: '#270303ff',
    fontFamily: fonts.family.regular,
  },

  // ======
  cartItem: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    // borderRadius: 10,
    padding: 15,
    // marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // elevation: 3,
  },
   separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderStyle: 'dashed',
    marginVertical: 12,
    marginHorizontal:15
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 16,
    fontFamily: fonts.family.semibold,
    color: colors.textPrimary,
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    fontFamily: fonts.family.medium,
    color: colors.brandPrimary,
    marginBottom: 10,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.brandPrimarySoft,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityBtnText: {
    color: colors.textBrand,
    fontSize: 18,
    fontFamily: fonts.family.bold,
  },
  quantityText: {
    fontSize: 16,
    fontFamily: fonts.family.medium,
    color: colors.textPrimary,
    marginHorizontal: 15,
  },
  removeBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    // backgroundColor: '#ff4444',
    borderRadius: 5,
  },
  removeBtnText: {
    color: colors.textBrand,
    fontSize: 19,
    fontFamily: fonts.family.bold,
  },
  totalContainer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    padding: 20,
    backgroundColor: colors.brandPrimarySoft,
  },
  totalText: {
    fontSize: 20,
    fontFamily: fonts.family.bold,
    color: colors.textPrimary,
    marginBottom: 15,
  },
  checkoutBtn: {
    backgroundColor: colors.brandPrimary,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
  },
  checkoutBtnText: {
    color: colors.background,
    fontSize: 16,
    fontFamily: fonts.family.bold,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#777',
    fontSize: 16,
  },
});
