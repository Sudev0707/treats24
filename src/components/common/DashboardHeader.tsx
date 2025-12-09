import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../theme/colors';
import DashboardHeaderStyles from '../../styles/components/DashboardHeaderStyles';
const DashboardHeader: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={DashboardHeaderStyles.mainDashboardHeader}>
        <View style={DashboardHeaderStyles.dashboardHeaderContainer}>
          {/* LEFT — LOCATION */}
          <TouchableOpacity
            style={DashboardHeaderStyles.addressWrapper}          
          >
            <View style={DashboardHeaderStyles.addressRow}>
              <Icon
                name="map-pin"
                size={18}
                color={colors.brandPrimary}
                style={{ marginRight: 2 }}
              />
              <Text style={DashboardHeaderStyles.addressText}>
                Bhubaneswar, Odisha
              </Text>
              <Icon name="chevron-down" size={19} color={colors.brandPrimary} />
            </View>
            <Text style={DashboardHeaderStyles.deliverySubtitle}>
              Delivering to your saved address
            </Text>
          </TouchableOpacity>

          {/* RIGHT — PROFILE */}
          <TouchableOpacity
            style={DashboardHeaderStyles.avatar}
            onPress={() => navigation.navigate('Profile' as never)}
          >
            <Text style={DashboardHeaderStyles.avatarText}>S</Text>
          </TouchableOpacity>
        </View>

        <View style={DashboardHeaderStyles.searchBar}>
          <TextInput
            style={DashboardHeaderStyles.searchInput}
            placeholder="Search for dishes or restaurants"
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

    
    </>
  );
};

export default DashboardHeader;
