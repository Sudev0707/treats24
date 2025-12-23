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
} from 'react-native';
import colors from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/common/Header';
import { RestaurantScreenStyle } from '../styles/screens/RestaurantScreenStyle.ts';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  route: RouteProp<RootStackParamList, 'RestaurantDetails'>;
};

const RestaurantDetailsScreen: React.FC<Props> = ({ route }) => {
  const { restaurantId } = route.params;

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
          source={require('../assets/images/Black and Yellow Simple Minimalist Burger Promotion Banner.png')}
          style={StyleSheet.absoluteFillObject}
          resizeMode="cover"
        >
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
              <Text style={RestaurantScreenStyle.title}>{'csm  mn n'}</Text>
              <View style={RestaurantScreenStyle.ratingBox}>
                <Text style={RestaurantScreenStyle.ratingText}>99 ★</Text>
              </View>
            </View>

            <View style={RestaurantScreenStyle.row}>
              <Text style={RestaurantScreenStyle.placeName}>
                Bistupur, Jamshedpur
              </Text>
              <Text style={RestaurantScreenStyle.distance}>📍 {}</Text>
            </View>

            <View style={RestaurantScreenStyle.distanceRow}><Text>hhughugh</Text></View>
          </LinearGradient>
        </ImageBackground>
      </View>

      <View style={RestaurantScreenStyle.container}>
        <ScrollView style={{ flex: 1, marginTop: 0 }}>
          <View style={{}}>
            <Text>bbkdsfbkfhfjherfhrfhjegjfgyr{restaurantId}</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default RestaurantDetailsScreen;
