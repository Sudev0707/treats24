import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import colors from '../theme/colors';
import { useScrollToHideTabBar } from '../hooks/useScrollToHideTabBar';
import Header from '../components/common/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../components/inputs/InputField';
import styles from '../styles/screens/ProfileStyles';
// import { Icon } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileInfo from '../components/common/ProfileInfo';

const Profile: React.FC = () => {
  const scrollProps = useScrollToHideTabBar({ threshold: 50 });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [showProfileInfo, setShowProfileInfo] = useState(false);

  const handleSubmit = () => {
    if (!email) {
      setFormError('Email is required');
      return;
    }
    if (!password) {
      setFormError('Password is required');
      return;
    }

    setFormError('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        // translucent
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <Header
        title={showProfileInfo ? 'My Profile' : ''}
        showBackButton={true}
        onBackPress={showProfileInfo ? () => setShowProfileInfo(false) : undefined}
      />
      {showProfileInfo ? (
        <ProfileInfo />
      ) : (
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          {...scrollProps}
        >
          <View style={styles.header}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>S</Text>
            </View>
            <Text style={styles.userName}>Sudev</Text>
            <Text style={styles.userEmail}>sudev@example.com</Text>
          </View>

          {/*  */}
          <View style={styles.contentContainer}>
            <View style={stylesRow.viewContainer}>
              <TouchableOpacity
                style={stylesRow.container}
                onPress={() => setShowProfileInfo(true)}
              >
                <View style={stylesRow.row}>
                  <Icon name="person" size={26} color="#000" />
                  <Text style={stylesRow.label}>Profile</Text>
                </View>
                <Icon name="chevron-right" size={28} color="#666" />
              </TouchableOpacity>

              <View style={stylesRow.separator} />

              <TouchableOpacity
                style={stylesRow.container}
                onPress={() => console.log('Address')}
              >
                <View style={stylesRow.row}>
                  <Icon name="location-on" size={26} color="#000" />
                  <Text style={stylesRow.label}>Address</Text>
                </View>
                <Icon name="chevron-right" size={28} color="#666" />
              </TouchableOpacity>

              <View style={stylesRow.separator} />

              <TouchableOpacity
                style={stylesRow.container}
                onPress={() => console.log('Orders')}
              >
                <View style={stylesRow.row}>
                  <Icon name="shopping-bag" size={26} color="#000" />
                  <Text style={stylesRow.label}>Orders</Text>
                </View>
                <Icon name="chevron-right" size={28} color="#666" />
              </TouchableOpacity>
            </View>

            <View style={stylesRow.viewContainer}>
              <TouchableOpacity
                style={stylesRow.container}
                onPress={() => console.log('Notifications')}
              >
                <View style={stylesRow.row}>
                  <Icon name="notifications" size={26} color="#000" />
                  <Text style={stylesRow.label}>Notifications</Text>
                </View>
                <Icon name="chevron-right" size={28} color="#666" />
              </TouchableOpacity>

              <View style={stylesRow.separator} />

              <TouchableOpacity
                style={stylesRow.container}
                onPress={() => console.log('Help')}
              >
                <View style={stylesRow.row}>
                  <Icon name="help-outline" size={26} color="#000" />
                  <Text style={stylesRow.label}>Help</Text>
                </View>
                <Icon name="chevron-right" size={28} color="#666" />
              </TouchableOpacity>
            </View>

            <View style={stylesRow.viewContainer}>
              <TouchableOpacity
                style={stylesRow.container}
                onPress={() => console.log('About')}
              >
                <View style={stylesRow.row}>
                  <Icon name="info-outline" size={26} color="#000" />
                  <Text style={stylesRow.label}>About</Text>
                </View>
                <Icon name="chevron-right" size={28} color="#666" />
              </TouchableOpacity>
              <View style={stylesRow.separator} />

              <TouchableOpacity
                style={stylesRow.container}
                onPress={() => console.log('Settings')}
              >
                <View style={stylesRow.row}>
                  <Icon name="settings" size={26} color="#000" />
                  <Text style={stylesRow.label}>Settings</Text>
                </View>
                <Icon name="chevron-right" size={28} color="#666" />
              </TouchableOpacity>
              <View style={stylesRow.separator} />

              <TouchableOpacity
                style={stylesRow.container}
                onPress={() => console.log('Logout')}
              >
                <View style={stylesRow.row}>
                  <Icon name="logout" size={26} color="#000" />
                  <Text style={stylesRow.label}>Logout</Text>
                </View>
                <Icon name="chevron-right" size={28} color="#666" />
              </TouchableOpacity>
            </View>

            <View style={styles.versionContainer}>
              <Text style={styles.versionText}>App Version</Text>
              <Text style={styles.versionNumber}>1.0.0</Text>
            </View>
          </View>

          {/* <InputField
            label="Email"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            validateType="email"
          />

          <InputField
            label="Password"
            placeholder="Password"
            type="password"
            value={password}
            onChangeText={setPassword}
          /> */}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Profile;

const stylesRow = StyleSheet.create({
  container: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  viewContainer: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 10,
    // paddingVertical:5
    marginBottom: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 14,
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#e5e5e5',
    marginHorizontal: 16, // keeps gap on both sides like screenshot
  },
});
