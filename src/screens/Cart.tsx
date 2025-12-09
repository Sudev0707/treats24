import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/screens/DashboardStyles';
import { useScrollToHideTabBar } from '../hooks/useScrollToHideTabBar';
import colors from '../theme/colors';
import Header from '../components/common/Header';

const Cart: React.FC = () => {
  const scrollProps = useScrollToHideTabBar();

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
          <Text style={{ padding: 20, textAlign: 'center' }}>
            Your cart items will be shown here.
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
