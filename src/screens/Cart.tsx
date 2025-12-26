import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { useScrollToHideTabBar } from '../hooks/useScrollToHideTabBar';
import { useAppSelector } from '../hooks/useAppSelector';
import colors from '../theme/colors';
import Header from '../components/common/Header';
import {
  selectCartItems,
  selectCartTotal,
} from '../store/selectors/cartSelectors';
import { removeItem, updateQuantity } from '../store/slices/cartSlice';
import { cartStyle } from '../styles/screens/CartStyles';
//

const { height } = Dimensions.get('window');

const Cart: React.FC = () => {
  const scrollProps = useScrollToHideTabBar();
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);
  const dispatch = useDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    } else {
      dispatch(removeItem(id));
    }
  };

  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={colors.background}
        barStyle="dark-content"
      />
      <SafeAreaView edges={['top']} style={cartStyle.headerWrapper}>
        <Header title="Cart" showBackButton={true} />
      </SafeAreaView>

      <View style={{ flex: 1 }}>
        <ScrollView
          {...scrollProps}
          contentContainerStyle={{
            marginTop: height * 0.12,
            paddingBottom: 240,
            // marginTop:19,
            // backgroundColor: colors.background,
            // borderWidth:1,
            flex: 1,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={cartStyle.container}>
            {/* show selected food items */}
            {cartItems.length === 0 ? (
              <View style={cartStyle.emptyCart}>
                <Text style={cartStyle.emptyCartText}>Your cart is empty</Text>
              </View>
            ) : (
              cartItems.map(item => (
                <View key={item.id} style={cartStyle.cartItem}>
                  <Image source={item.image} style={cartStyle.itemImage} />
                  <View style={cartStyle.itemDetails}>
                    <Text style={cartStyle.itemName}>{item.name}</Text>
                    <Text style={cartStyle.itemPrice}>₹{item.price}</Text>
                    <View style={cartStyle.quantityControls}>
                      <TouchableOpacity
                        onPress={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        style={cartStyle.quantityBtn}
                      >
                        <Text style={cartStyle.quantityBtnText}>-</Text>
                      </TouchableOpacity>
                      <Text style={cartStyle.quantityText}>{item.quantity}</Text>
                      <TouchableOpacity
                        onPress={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        style={cartStyle.quantityBtn}
                      >
                        <Text style={cartStyle.quantityBtnText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => handleRemoveItem(item.id)}
                    style={cartStyle.removeBtn}
                  >
                    <Text style={cartStyle.removeBtnText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              ))
            )}
            {cartItems.length > 0 && (
              <View style={cartStyle.totalContainer}>
                <Text style={cartStyle.totalText}>Total: ₹{cartTotal}</Text>
                <TouchableOpacity style={cartStyle.checkoutBtn}>
                  <Text style={cartStyle.checkoutBtnText}>Checkout</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Cart;
