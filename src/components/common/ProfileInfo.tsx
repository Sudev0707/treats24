import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import styles from '../../styles/components/ProfileInfoStyles';

const ProfileInfo: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>S</Text>
      </View>
      <Text style={styles.userName}>Sudev</Text>
      <Text style={styles.userEmail}>sudev@example.com</Text>
      {/* Add more profile details as needed */}
    </View>
  );
};
     


export default ProfileInfo;
