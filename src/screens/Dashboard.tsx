// import React, { use } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/screens/DashboardStyles';
import { useScrollToHideTabBar } from '../hooks/useScrollToHideTabBar';
import { useNavigation } from '@react-navigation/native';
import DashboardHeader from '../components/common/DashboardHeader';
import colors from '../theme/colors';

const featuredRestaurants = [
  {
    id: '1',
    name: 'Burger Hub',
    rating: 4.7,
    category: 'Burgers • Fast Food',
    time: '25-30 min',
    price: '$$',
    delivery: 'Free delivery',
  },
  {
    id: '2',
    name: 'Green Bowl',
    rating: 4.5,
    category: 'Healthy • Salads',
    time: '20-25 min',
    price: '$$',
    delivery: '₹20 delivery',
  },
  {
    id: '3',
    name: 'Pizza Station',
    rating: 4.8,
    category: 'Pizza • Italian',
    time: '30-35 min',
    price: '$$$',
    delivery: 'Free delivery',
  },
];

const Dashboard: React.FC = () => {
  const scrollProps = useScrollToHideTabBar();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="" barStyle="dark-content" />
      {/* Header */}
      <DashboardHeader />
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          {...scrollProps}
        >
          {/* Search */}
          {/* <View style={styles.searchBar}>
            <TextInput
              style={{
                flex: 1,
                backgroundColor: '#FFFFFF',
                borderRadius: 16,
                paddingHorizontal: 16,
                height: 44,
                fontSize: 16,
                color: '#22223B',
              }}
              placeholder="Search for dishes or restaurants"
              placeholderTextColor="#9CA3AF"
              editable
            />
          </View> */}

          {/* Header Demos */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Header Demos</Text>
            </View>
            <View style={styles.chipsRow}>
              <TouchableOpacity
                style={[styles.chip, styles.chipActive]}
                onPress={() => navigation.navigate('HeaderDemo1' as never)}
              >
                <Text style={[styles.chipText, styles.chipTextActive]}>
                  Demo 1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.chip}
                onPress={() => navigation.navigate('HeaderDemo2' as never)}
              >
                <Text style={styles.chipText}>Demo 2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.chip}
                onPress={() => navigation.navigate('HeaderDemo3' as never)}
              >
                <Text style={styles.chipText}>Demo 3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.chip}
                onPress={() => navigation.navigate('HeaderDemo4' as never)}
              >
                <Text style={styles.chipText}>Demo 4</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Categories */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>What&apos;s on your mind?</Text>
            </View>
            <View style={styles.chipsRow}>
              <TouchableOpacity style={[styles.chip, styles.chipActive]}>
                <Text style={[styles.chipText, styles.chipTextActive]}>
                  Burgers
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chip}>
                <Text style={styles.chipText}>Pizza</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chip}>
                <Text style={styles.chipText}>Indian</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chip}>
                <Text style={styles.chipText}>Desserts</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Featured restaurants */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Featured</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.horizontalList}
            >
              {featuredRestaurants.map(item => (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.9}
                  style={styles.restaurantCard}
                >
                  <View style={styles.restaurantImagePlaceholder}>
                    <Text style={styles.restaurantImageText}>
                      Image placeholder
                    </Text>
                  </View>
                  <View style={styles.restaurantInfo}>
                    <Text style={styles.restaurantName}>{item.name}</Text>
                    <View style={styles.restaurantMetaRow}>
                      <Text style={styles.ratingText}>{item.rating}★</Text>
                      <View style={styles.dotSeparator} />
                      <Text style={styles.metaText}>{item.category}</Text>
                    </View>
                    <View style={styles.restaurantMetaRow}>
                      <Text style={styles.metaText}>{item.time}</Text>
                      <View style={styles.dotSeparator} />
                      <Text style={styles.priceText}>{item.price}</Text>
                    </View>
                    <View style={styles.deliveryTag}>
                      <Text style={styles.deliveryTagText}>
                        {item.delivery}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
          {/* Nearby / list section (simple placeholder for now) */}
          <View>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionTitle}>Nearby restaurants</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
            <View style={styles.nearbyList}>
              <Text style={styles.metaText}>
                We&apos;ll show your nearby options here.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
