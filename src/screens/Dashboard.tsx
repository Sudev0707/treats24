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
import BannerSlider from '../components/common/BannerSlider';
import colors from '../theme/colors';
import { getCurrentLocationWithAddress } from '../utils/locationService';
import { useState } from 'react';


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
// 
const Dashboard: React.FC = () => {
  const scrollProps = useScrollToHideTabBar();
  const navigation = useNavigation();
   const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState<LocationType | null>(null);

   getCurrentLocationWithAddress(locationData => {
        setLocation(locationData);
        setLoading(false);
      });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="" barStyle="dark-content" />
      {/* Header */}
      <DashboardHeader />
      <View style={{ flex: 1, backgroundColor: colors.backgroundSoft }}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          {...scrollProps}
        >
         

         

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
                  Screen 1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.chip}
                onPress={() => navigation.navigate('HeaderDemo2' as never)}
              >
                <Text style={styles.chipText}>Screen 2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.chip}
                onPress={() => navigation.navigate('HeaderDemo3' as never)}
              >
                <Text style={styles.chipText}>Screen 3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.chip}
                onPress={() => navigation.navigate('HeaderDemo4' as never)}
              >
                <Text style={styles.chipText}>Screen 4</Text>
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

        
          </View>

        
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
