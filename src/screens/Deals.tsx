import React from 'react';
import { View, Text, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import styles from '../styles/screens/DashboardStyles';
import { useScrollToHideTabBar } from '../hooks/useScrollToHideTabBar';
import colors from '../theme/colors';
import Header from '../components/common/Header';

const HEADER_HEIGHT = 60;

const Deals: React.FC = () => {
  const scrollProps = useScrollToHideTabBar();

  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={colors.background}
        barStyle="dark-content"
      />

      {/* FIXED HEADER */}
      <SafeAreaView edges={['top']} style={styles.headerWrapper}>
        <Header showBackButton={true} title="Deals" />
      </SafeAreaView>

      {/* SCREEN CONTENT */}
      <View style={{ flex: 1, backgroundColor: colors.backgroundSoft }}>
        <ScrollView
          {...scrollProps}
          contentContainerStyle={{
            paddingTop: HEADER_HEIGHT + 12,
            paddingBottom: 24,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <Text style={styles.emptyText}>No favorites added yet</Text>
            <Text style={styles.emptyText}>No favorites added yet</Text>
            <Text style={styles.emptyText}>No favorites added yet</Text>
            <Text style={styles.emptyText}>No favorites added yet</Text>
            <Text style={styles.emptyText}>No favorites added yet</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.backgroundSoft,
  },

  /* FIXED HEADER */
  headerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  /* SCROLL CONTENT */
  scrollContent: {
    paddingBottom: 30,
  },

  /* SECTION HEADER */
  sectionHeaderRow: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  emptyText: {
    // textAlign: 'center',
    // marginTop: 40,
    // color: '#777',
    // fontSize: 16,
  },
});
