import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import locationStyles from '../styles/screens/SetLocationStyles';
import Header from '../components/common/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { getCurrentLocation } from '../utils/locationService';

const SetLocation: React.FC = () => {
  const ActionButton = ({ icon, label, onPress }: any) => {
    return (
      <TouchableOpacity style={styles.actionButton} onPress={onPress}>
        {icon}
        <Text style={styles.actionText}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={locationStyles.safeArea}>
      <Header showBackButton title="Select your location" />

      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search an area or address"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
          <Ionicons name="search" size={20} color="#999" />
        </View>

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <ActionButton
            icon={
              <MaterialIcons name="my-location" size={22} color="#ff6a00" />
            }
            label="Use Current Location"
             onPress={getCurrentLocation}
          />
          <ActionButton
            icon={
              <MaterialIcons
                name="add-location-alt"
                size={22}
                color="#ff6a00"
              />
            }
            label="Add New Address"
          />
          <ActionButton
            icon={<Ionicons name="logo-whatsapp" size={22} color="#25D366" />}
            label="Request Address"
          />
        </View>

        {/* Saved Address */}
        <Text style={styles.sectionTitle}>SAVED ADDRESSES</Text>

        {/* saved address container */}
        <View style={styles.addressCard}>
          <View style={styles.addressLeft}>
            <View style={styles.homeIcon}>
              <Feather name="home" size={18}  color="#ff6a00" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.addressTitle}>Home</Text>
              <Text style={styles.addressText} numberOfLines={2}>
                Sudev, Near Krishna Kunj Apartment (white Building), Krishnapur,
                Kestopur, Kolkata, West...
              </Text>
            </View>
          </View>

          <View style={styles.addressRight}>
            <Text style={styles.distance}>202 km</Text>
            <Feather name="more-vertical" size={18} color="#999" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SetLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    height: 48,
    elevation: 2,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 8,
  },

  actionButton: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 14,
    marginHorizontal: 4,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
  },

  actionText: {
    fontSize: 12,
    marginTop: 6,
    textAlign: 'center',
    color: '#333',
  },

  sectionTitle: {
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 8,
    fontSize: 12,
    color: '#999',
    fontWeight: '600',
  },

  addressCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 14,
    borderRadius: 14,
    elevation: 2,
  },

  addressLeft: {
    flexDirection: 'row',
    flex: 1,
     alignItems:'center',
    justifyContent:'center',
    alignContent:'center'

  },

  homeIcon: {
    backgroundColor: '#fff2e8',
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
    // paddingHorizontal:20,
    // width:18,
    // height:18
    // alignItems:'center',
    // justifyContent:'center',
    // alignContent:'center'
  },

  addressTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },

  addressText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },

  addressRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  distance: {
    fontSize: 12,
    color: '#999',
  },
});
