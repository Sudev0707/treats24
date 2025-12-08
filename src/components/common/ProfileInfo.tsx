import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import colors from '../../theme/colors';
import styles from '../../styles/components/ProfileInfoStyles';
import Button from './Button';
import InputField from '../inputs/InputField';
import DOBInput from '../inputs/DOBInput';
import Col from '../layout/Col';
import TextHeader from './TextHeader';

const ProfileInfo: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const genderOptions = ['Male', 'Female', 'Other'];

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>S</Text>
          </View>
          <Text style={styles.userName}>Sudev</Text>
          <Text style={styles.userEmail}>sudev@example.com</Text>
        </View>
        {/* <View style={styles.separator} /> */}

        <View style={styles.userDetailContainer}>
          <TextHeader type="primary">Basic Details</TextHeader>
          <InputField
            label="First Name"
            placeholder="Enter first name"
            value={'Sudev'}
            onChangeText={() => {
              ('');
            }}
            type="text"
          /><InputField
            label="Last Name"
            placeholder="Enter last name"
            value={'Maji'}
            onChangeText={() => {
              ('');
            }}
            type="text"
          />

          <InputField
            label="Email"
            placeholder="Enter email"
            value={'sudev97gmail.com'}
            onChangeText={() => {
              ('');
            }}
            type="email"
          />
          <View style={styles.roww}>
            <View style={{ width: '35%' }}>
              <InputField
                label="Code"
                placeholder="Enter mobile number"
                value={'+9'}
                onChangeText={() => {
                  ('');
                }}
                type="text"
                keyboardType="phone-pad"
              />
            </View>

            <View style={{ width: '60%' }}>
              <InputField
                label="Mobile"
                placeholder="Enter mobile number"
                value={'7488854000'}
                onChangeText={() => {
                  ('');
                }}
                type="text"
                keyboardType="phone-pad"
              />
            </View>
          </View>
          {/*  */}

          <DOBInput label="Date of birth" value={dob} onChange={setDob} />

          {/*  */}
          <TextHeader type="primary">Gender</TextHeader>
          <View style={styles.genderContainer}>
            {genderOptions.map(gender => (
              <TouchableOpacity
                key={gender}
                style={styles.radioButton}
                onPress={() => setSelectedGender(gender)}
              >
                <View
                  style={[
                    styles.radioCircle,
                    selectedGender === gender && styles.selectedRadioCircle,
                  ]}
                >
                  {selectedGender === gender && (
                    <View style={styles.selectedRb} />
                  )}
                </View>
                <Text style={styles.radioText}>{gender}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.userDetailContainer}>
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

        <View style={{ marginTop: 50 }}>
          <Button title="Update" variant="filled" onPress={() => ''} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileInfo;
