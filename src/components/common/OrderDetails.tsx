import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import styles from '../../styles/components/OrderDetailsStyle';

const OrderDetails: React.FC = ({}) => {
  return (
    <>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.userDetailContainer}></View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default OrderDetails;
