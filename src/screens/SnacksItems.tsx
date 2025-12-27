import React from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../routes/types';


type Props = {
  route: RouteProp<RootStackParamList, 'SnacksItems'>;
};


const SnacksItems: React.FC<Props> = ({route}) => {
     const { itemType } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Snacks Items</Text>
      <Text style={styles.subtitle}>Coming Soon...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default SnacksItems;
