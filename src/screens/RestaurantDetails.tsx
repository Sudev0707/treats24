import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../routes/types';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import colors from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/common/Header';
import { RestaurantScreenStyle } from '../styles/screens/RestaurantScreenStyle.ts';
import LinearGradient from 'react-native-linear-gradient';
import { featuredRestaurants } from '../data/foodData';

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
  address: {
    line1: string;
    area: string;
    city: string;
    pincode: string;
  };
  contact: {
    phone: string;
  };
  tags: string[];
  image: ImageSourcePropType;
  foods: any[]; // You can define a more specific type if needed
}

type Props = {
  route: RouteProp<RootStackParamList, 'RestaurantDetails'>;
};

const RestaurantDetailsScreen: React.FC<Props> = ({ route }) => {
  const { restaurantId } = route.params;

  const restaurant = featuredRestaurants.find(r => r.id === restaurantId);

  if (!restaurant) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Restaurant not found</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={colors.background}
        barStyle="light-content"
      />
      <View style={RestaurantScreenStyle.headerTop}>

        <ImageBackground
          imageStyle={RestaurantScreenStyle.headerImage}
          source={restaurant.image}
          style={[StyleSheet.absoluteFillObject, {borderBottomLeftRadius: 26, borderBottomRightRadius: 26}]}
          resizeMode="cover"
        >
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.72)', 'rgba(0,0,0,0.45)', 'rgba(0,0,0,0.0)']}
            style={RestaurantScreenStyle.topGradient}
          />
          
          <LinearGradient
            colors={[
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.6)',
              'rgba(0,0,0,0.85)',
              'rgba(0,0,0,1)',
              'rgba(0,0,0,1)',
            ]}
            locations={[0, 0.35, 0.6, 0.85, 1]}
            style={RestaurantScreenStyle.gradient}
          >
            <View style={RestaurantScreenStyle.row}>
              <Text style={RestaurantScreenStyle.title}>{restaurant.name}</Text>
              <View style={RestaurantScreenStyle.ratingBox}>
                <Text style={RestaurantScreenStyle.ratingText}>
                  {restaurant.rating} ★
                </Text>
              </View>
            </View>

            <View style={RestaurantScreenStyle.row}>
              <Text style={RestaurantScreenStyle.placeName}>
                {restaurant.address.area}, {restaurant.address.city}
              </Text>
              <Text style={RestaurantScreenStyle.distance}>
                📍 {restaurant.time}
              </Text>
            </View>

            {/* <View style={RestaurantScreenStyle.distanceRow}>
              <Text style={RestaurantScreenStyle.categoryText} >{restaurant.category}</Text>
            </View> */}
          </LinearGradient>
        </ImageBackground>
      </View>

      <View style={RestaurantScreenStyle.container}>
        <ScrollView style={{ flex: 1, marginTop: 0 }}>
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
              About {restaurant.name}
            </Text>
            <Text>
              Rating: {restaurant.rating} ({restaurant.reviews} reviews)
            </Text>
            <Text>Delivery: {restaurant.delivery}</Text>
            <Text>Price Range: {restaurant.price}</Text>
            <Text>Status: {restaurant.isOpen ? 'Open' : 'Closed'}</Text>
            <Text>Tags: {restaurant.tags.join(', ')}</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default RestaurantDetailsScreen;
