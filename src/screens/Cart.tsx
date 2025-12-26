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
import { useSelector, useDispatch } from 'react-redux';
import { useScrollToHideTabBar } from '../hooks/useScrollToHideTabBar';
import colors from '../theme/colors';
import Header from '../components/common/Header';
import {
  selectCartItems,
  selectCartTotal,
} from '../store/selectors/cartSelectors';
import { removeItem, updateQuantity } from '../store/slices/cartSlice';
import { CartItem } from '../store/slices/cartSlice';
import { cartStyle } from '../styles/screens/CartStyles';
//

const { height } = Dimensions.get('window');

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
            <Text style={cartStyle.emptyText}>No favorites added yet</Text>
            <Text style={cartStyle.emptyText}>No favorites added yet</Text>
            <Text style={cartStyle.emptyText}>No favorites added yet</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Cart;
