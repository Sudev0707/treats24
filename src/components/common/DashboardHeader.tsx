import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../theme/colors';
import DashboardHeaderStyles from '../../styles/components/DashboardHeaderStyles';
import LinearGradient from 'react-native-linear-gradient';
import { getDBConnection } from '../../database/db';
import { getStoredLocation } from '../../database/queries';
import { locationdata } from '../../database/types';

const DashboardHeader: React.FC = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState<locationdata | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const locationData = async () => {
      setLoading(true);
      const db = await getDBConnection();
      const data = await getStoredLocation(db);
      setLocation(data);
      setLoading(false);
    };

    locationData();
  }, []);

  return (
    <>
      <LinearGradient
        colors={['#ffffffff', '#ffffffff']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={DashboardHeaderStyles.LinearGradientHeader}
      >
        <View style={DashboardHeaderStyles.mainDashboardHeader}>
          <View style={DashboardHeaderStyles.dashboardHeaderContainer}>
            {/* LEFT — LOCATION */}
            <TouchableOpacity style={DashboardHeaderStyles.addressWrapper}>
              <View style={DashboardHeaderStyles.addressRow}>
                <Icon
                  name="map-pin"
                  size={18}
                  color={colors.brandPrimary}
                  style={{ marginRight: 2 }}
                />
                <Text style={DashboardHeaderStyles.addressText}>
                  {location?.city}
                </Text>
                <Icon
                  name="chevron-down"
                  size={19}
                  color={colors.brandPrimary}
                />
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
      </LinearGradient>
    </>
  );
};

export default DashboardHeader;
