import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import AnimatedTabBar from './AnimatedTabBar';

const TabBarWithContainer: React.FC<BottomTabBarProps> = props => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>🛒 2 items • ₹349</Text>
      </View>
      <AnimatedTabBar {...props} />
    </View>
  );
};

export default TabBarWithContainer;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  topContainer: {
    height: 55,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
});
