import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Addressstyles from '../../styles/components/UserAddressStyle';
import styles from '../../styles/components/ProfileInfoStyles';
import TextHeader from './TextHeader';
import InputField from '../inputs/InputField';

const UserAddress: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView style={Addressstyles.container} behavior="padding">
        <ScrollView contentContainerStyle={Addressstyles.scrollContainer}>
          <View style={Addressstyles.userDetailContainer}></View>
          <View style={Addressstyles.userDetailContainer}>
            <View>
              <TextHeader type="primary">Address</TextHeader>
              <InputField
                label="House / Flat / Door No."
                placeholder="Enter house or flat number"
                value={''}
                onChangeText={() => ''}
                type="text"
                variant="standard"
              />

              <InputField
                label="Street / Area / Locality"
                placeholder="Enter street or area"
                value={''}
                onChangeText={() => ''}
                type="text"
                variant="standard"
              />

              <InputField
                label="Landmark (optional)"
                placeholder="Near temple / school / mall …"
                value={''}
                onChangeText={() => ''}
                type="text"
                variant="standard"
              />

              <InputField
                label="City"
                placeholder="Enter city"
                value={''}
                onChangeText={() => ''}
                type="text"
                variant="standard"
              />

              <InputField
                label="State"
                placeholder="Enter state"
                value={''}
                onChangeText={() => ''}
                type="text"
                variant="standard"
              />

              <InputField
                label="Pincode"
                placeholder="Enter pincode"
                value={''}
                onChangeText={() => ''}
                keyboardType="numeric"
                type="text"
                variant="standard"
              />

              {/* Address Type */}
              <InputField
                label="Address Type"
                placeholder="Home / Work / Other"
                value={''}
                onChangeText={() => ''}
                type="text"
                variant="standard"
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default UserAddress;
