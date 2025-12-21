// import React, { use } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  StyleSheet,
  Image,
  Platform,
  FlatList,
  ListRenderItem,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/screens/DashboardStyles';
import { useScrollToHideTabBar } from '../hooks/useScrollToHideTabBar';
import { useNavigation } from '@react-navigation/native';
import DashboardHeader from '../components/common/DashboardHeader';
import BannerSlider from '../components/common/BannerSlider';
import colors from '../theme/colors';
import { getCurrentLocationWithAddress } from '../utils/locationService';
import { useEffect, useRef, useState } from 'react';
import { featuredRestaurants } from '../data/foodData';

import {
  CATEGORIES,
  RESTAURANTS,
  topOffers,
  topPicks,
} from '../data/dummyFoodData';
import { bannerData } from '../data/foodData';

interface LocationType {
  latitude: number;
  longitude: number;
  area: string;
  city: string;
  state: string;
  district: string;
  pincode: string;
  country: string;
  country_code: string;
}

interface BannerItem {
  id: string;
  image: ImageSourcePropType;
}
//
const Dashboard: React.FC = () => {
  const scrollProps = useScrollToHideTabBar();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<LocationType | null>(null);
  const sliderRef = useRef<FlatList<BannerItem>>(null);

  //  getCurrentLocationWithAddress(locationData => {
  //       setLocation(locationData);
  //       setLoading(false);
  //     });

  // const bannerData = [
  //   { id: '1', image: 'https://picsum.photos/800/400?random=1' },
  //   { id: '2', image: 'https://picsum.photos/800/400?random=2' },
  //   { id: '3', image: 'https://picsum.photos/800/400?random=3' },
  // ];

  const renderItem: ListRenderItem<BannerItem> = ({ item }) => {
    return (
      <TouchableOpacity style={styles.BannerHolder}>
        <Image source={item.image} style={styles.bannerImage} />
      </TouchableOpacity>
    );
  };

  //

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % bannerData.length;
      sliderRef.current?.scrollToIndex({ index, animated: true });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <>
        <StatusBar
          translucent={false}
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <DashboardHeader />
      </>

      {/* body */}
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          {...scrollProps}
        >
          <View>
            {/* food/ad banner slider*/}
            <View style={styles.dashboardBanner}>
              <FlatList
                ref={sliderRef}
                data={bannerData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
              />
            </View>

            {/* <View style={styles.dashboardBanner}>
              <TouchableOpacity style={styles.BannerHolder}>
                <Image source={require('')} style={styles.bannerImage} />
              </TouchableOpacity>
            </View> */}
            {/*  */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>What&apos;s on your mind?</Text>
            </View>
            <View style={styles.chipsRow}>
              {CATEGORIES.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.chip,
                    item.name === 'Burgers' && styles.chipActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.chipText,
                      item.name === 'Burgers' && styles.chipTextActive,
                    ]}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Featured</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            {featuredRestaurants.map(item => (
              <View key={item.id} style={Styles.card}>
                <Text style={Styles.cardTitle}>{item.name}</Text>
                <Text style={Styles.cardSub}>
                  ⭐ {item.rating} • {item.time}
                </Text>
              </View>
            ))}
          </View>

          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Top Picks</Text>
            </View>

            <View style={Styles.horizontalRow}>
              {topPicks.map(item => (
                <View key={item.id} style={Styles.smallCard}>
                  <Text style={Styles.smallCardText}>{item.title}</Text>
                </View>
              ))}
            </View>
          </View>

          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Top Offers</Text>
            </View>

            {topOffers.map(item => (
              <View key={item.id} style={Styles.offerCard}>
                <Text style={Styles.offerText}>{item.offer}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Dashboard;

const Styles = StyleSheet.create({
  LinearGradientHeader: {
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    paddingHorizontal: 16,

    // paddingBottom: 32,
    // borderWidth: 1,
    // borderBottomLeftRadius: 32,
    // borderBottomRightRadius: 32,
    overflow: 'hidden',
    shadowColor: '#000', // iOS
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    // backgroundColor: 'transparent',
    zIndex: 9,
  },
  headerShadow: {
    height: 1,
    // elevation: 10, // Android shadow
    shadowColor: '#000', // iOS
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    // backgroundColor: 'transparent',
    zIndex: 9,

    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },

  header: {
    backgroundColor: 'transparent', // gradient only
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,

    paddingHorizontal: 16,
    paddingBottom: 32,

    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,

    overflow: 'hidden', // keeps rounded corners clean
  },

  // -------------------------
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
  },

  cardSub: {
    marginTop: 4,
    color: '#777',
  },

  horizontalRow: {
    flexDirection: 'row',
  },

  smallCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 14,
    marginRight: 12,
  },

  smallCardText: {
    fontWeight: '600',
  },

  offerCard: {
    backgroundColor: '#ffe9d6',
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
  },

  offerText: {
    fontWeight: '700',
    color: '#ff6a00',
  },
});
