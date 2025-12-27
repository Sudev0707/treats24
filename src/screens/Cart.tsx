import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { useScrollToHideTabBar } from '../hooks/useScrollToHideTabBar';
import { useAppSelector } from '../hooks/useAppSelector';
import colors from '../theme/colors';
import Header from '../components/common/Header';
import CartSkeleton from '../components/common/CartSkeleton';
import {
  selectCartItems,
  selectCartTotal,
} from '../store/selectors/cartSelectors';
import { removeItem, updateQuantity } from '../store/slices/cartSlice';
import { cartStyle } from '../styles/screens/CartStyles';

const { height } = Dimensions.get('window');

const Cart: React.FC = () => {
  const scrollProps = useScrollToHideTabBar();
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  console.log('cartItems.length', cartItems.length);

  useEffect(() => {
    // Simulate loading delay or wait for data readiness
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

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

      <View style={{ flex: 1, backgroundColor: colors.background }}>
        {cartItems.length === 0 && !loading ? (
          <View style={cartStyle.emptyCart}>
            <Text style={cartStyle.emptyCartText}>Your cart is empty</Text>
          </View>
        ) : (
          <ScrollView
            {...scrollProps}
            contentContainerStyle={{
              marginTop: height * 0.12,
              paddingBottom: 250,
            }}
            showsVerticalScrollIndicator={false}
          >
            {loading ? (
              <CartSkeleton />
            ) : (
              <>
                <View style={cartStyle.container}>
                  <View style={cartStyle.productContainer}>
                    {cartItems.map((item, index) => (
                      <>
                        <View key={item.id} style={cartStyle.cartItem}>
                          <View style={cartStyle.foodImageBox}>
                            <Image
                              resizeMode="contain"
                              source={
                                item.image ||
                                require('../assets/images/foods/dummy food.png')
                              }
                              style={
                                item.image
                                  ? cartStyle.itemImage
                                  : cartStyle.dummyItemImage
                              }
                            />
                          </View>
                          <View style={cartStyle.itemDetails}>
                            <View style={cartStyle.titleRow}>
                              <Text style={cartStyle.itemName}>
                                {item.name}
                              </Text>
                              {/* <TouchableOpacity
                                onPress={() => handleRemoveItem(item.id)}
                                style={cartStyle.removeBtn}
                              >
                                <Text style={cartStyle.removeBtnText}>X</Text>
                              </TouchableOpacity> */}
                            </View>

                            <View style={cartStyle.priceRow}>
                              <Text style={cartStyle.itemPrice}>
                                ₹{item.price}
                              </Text>
                              <View style={cartStyle.quantityControls}>
                                <TouchableOpacity
                                  onPress={() =>
                                    handleUpdateQuantity(
                                      item.id,
                                      item.quantity - 1,
                                    )
                                  }
                                  style={cartStyle.quantityBtn}
                                >
                                  <Text style={cartStyle.quantityBtnText}>
                                    -
                                  </Text>
                                </TouchableOpacity>
                                <Text style={cartStyle.quantityText}>
                                  {item.quantity}
                                </Text>
                                <TouchableOpacity
                                  onPress={() =>
                                    handleUpdateQuantity(
                                      item.id,
                                      item.quantity + 1,
                                    )
                                  }
                                  style={cartStyle.quantityBtn}
                                >
                                  <Text style={cartStyle.quantityBtnText}>
                                    +
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </View>

                        {/* Dashed Separator */}
                        {index !== cartItems.length - 1 && (
                          <View style={cartStyle.separator} />
                        )}
                      </>
                    ))}
                  </View>
                </View>
              </>
            )}
          </ScrollView>
        )}
        {cartItems.length > 0 && (
          <>
            <View style={cartStyle.totalContainer}>
              <Text style={cartStyle.totalText}>Total: ₹{cartTotal}</Text>
              <TouchableOpacity style={cartStyle.checkoutBtn}>
                <Text style={cartStyle.checkoutBtnText}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default Cart;
