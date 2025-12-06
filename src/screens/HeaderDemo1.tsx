import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/common/Header';

const HeaderDemo1: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Simple Title" />
      <View style={styles.content}>
        <Text style={styles.text}>This screen shows a header with just a title.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});

export default HeaderDemo1;
