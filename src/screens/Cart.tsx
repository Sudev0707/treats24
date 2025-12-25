import React from 'react';
import { View, Text, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/screens/DashboardStyles';
import { useScrollToHideTabBar } from '../hooks/useScrollToHideTabBar';
import colors from '../theme/colors';
import Header from '../components/common/Header';
import { selectCartItems, selectCartTotal } from '../store/selectors/cartSelectors';
import { removeItem, updateQuantity } from '../store/slices/cartSlice';
import { CartItem } from '../store/slices/cartSlice';

const Cart: React.FC = () => {
  const scrollProps = useScrollToHideTabBar();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="" barStyle="dark-content" />
        <Header showBackButton={true} />
      <View style={{ flex: 1, backgroundColor: colors.backgroundSoft }}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          {...scrollProps}
        >
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>My Plate</Text>
          </View>
          {cartItems.length === 0 ? (
            <Text style={{ padding: 20, textAlign: 'center' }}>
              Your cart is empty.
            </Text>
          ) : (
            <>
              {cartItems.map((item: CartItem) => (
                <View key={item.id} style={{ flexDirection: 'row', padding: 10, backgroundColor: 'white', margin: 5, borderRadius: 10 }}>
                  <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 5 }} />
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ fontSize: 14, color: 'gray' }}>${item.price}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                      <TouchableOpacity onPress={() => handleUpdateQuantity(item.id, item.quantity - 1)} style={{ padding: 5, backgroundColor: '#f0f0f0', borderRadius: 5 }}>
                        <Text>-</Text>
                      </TouchableOpacity>
                      <Text style={{ marginHorizontal: 10 }}>{item.quantity}</Text>
                      <TouchableOpacity onPress={() => handleUpdateQuantity(item.id, item.quantity + 1)} style={{ padding: 5, backgroundColor: '#f0f0f0', borderRadius: 5 }}>
                        <Text>+</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleRemoveItem(item.id)} style={{ marginLeft: 10, padding: 5, backgroundColor: 'red', borderRadius: 5 }}>
                        <Text style={{ color: 'white' }}>Remove</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
              <View style={{ padding: 20, backgroundColor: 'white', margin: 5, borderRadius: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total: ${cartTotal.toFixed(2)}</Text>
              </View>
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
