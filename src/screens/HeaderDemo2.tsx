import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/common/Header';

const HeaderDemo2: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header
        title="Back Button Demo"
        showBackButton={true}
        rightMenu={
          <TouchableOpacity style={styles.menuButton}>
            <Icon name="ellipsis-vertical" size={24} color="#000" />
          </TouchableOpacity>
        }
      />
      <View style={styles.content}>
        <Text style={styles.text}>This screen shows a header with back button, title, and right menu.</Text>
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
  menuButton: {
    padding: 8,
  },
});

export default HeaderDemo2;
