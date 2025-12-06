import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Header';
import styles from '../../styles/screens/DashboardStyles';

const DashboardHeader: React.FC = () => {
  const navigation = useNavigation();

  return (
    
      <Header
        leftContent={
          <View style={styles.headerTextGroup}>
            <Text style={styles.welcomeText}>Good evening,</Text>
            <Text style={styles.userName}>Sudev</Text>
            <View style={styles.locationRow}>
              <Text style={styles.locationLabel}>Delivering to</Text>
              {/* <Text style={styles.locationValue}>Bhubaneswar, Odisha</Text> */}
            </View>
          </View>
        }
        rightMenu={
          <TouchableOpacity
            style={styles.avatar}
            onPress={() => navigation.navigate('Profile' as never)}
          >
            <Text style={styles.avatarText}>S</Text>
          </TouchableOpacity>
        }
      />
 
  );
};

export default DashboardHeader;
