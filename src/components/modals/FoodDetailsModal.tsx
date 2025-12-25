import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/AppRoutes';
import FoodDetailsModalStyles from '../../styles/components/FoodDetailsModalStyles';
import colors from '../../theme/colors';

interface FoodItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  isVeg: boolean;
  image?: ImageSourcePropType;
}

interface RestaurantItem {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  category: string;
  time: string;
  price: string;
  delivery: string;
  isOpen: boolean;
  image: ImageSourcePropType;
  foodCategories: {
    id: string;
    title: string;
    type: string;
    isAvailable: boolean;
    items: FoodItem[];
  }[];
}

interface FoodAddedBoxProps {
  visible: boolean;
  onClose: () => void;
  foodCounts: { [key: string]: number };
  restaurant: RestaurantItem;
}

const FoodAddedBox: React.FC<FoodAddedBoxProps> = ({
  visible,
  onClose,
  foodCounts,
  restaurant,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const allFoods = restaurant.foodCategories.flatMap(category => category.items);
  const totalCount = Object.values(foodCounts).reduce((sum, count) => sum + count, 0);
  const totalPrice = Object.entries(foodCounts).reduce((sum, [foodId, count]) => {
    const food = allFoods.find(f => f.id === foodId);
    return sum + (food ? food.price * count : 0);
  }, 0);

  const handleViewCart = () => {
    onClose(); // Close the modal
    navigation.navigate('Cart');
  };

  return (
    <View style={FoodDetailsModalStyles.popUp}>
      <View style={FoodDetailsModalStyles.box}>

        {/* total added food price , increase or decreases by adding or removing */}
        <Text style={FoodDetailsModalStyles.price}>
          Total Price: ${totalPrice.toFixed(2)}
        </Text>

        {/* total added food counts , increase or decreases by adding or removing */}
        <Text style={FoodDetailsModalStyles.countText}>Total Items: {totalCount}</Text>

        <TouchableOpacity onPress={handleViewCart}
          style={{
            backgroundColor: colors.brandPrimary,
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: colors.textOnBrand,
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            View Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodAddedBox;
