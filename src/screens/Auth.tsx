import React, { use, useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
  Keyboard,
} from 'react-native';
import styles from '../styles/screens/AuthStyles';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PhoneInput from '../components/inputs/PhoneInput';
import CountryModal from '../components/modals/CountryModals';
const googleIcon = require('../assets/icons/iconsgoogle.png');
const mailIcon = require('../assets/icons/iconsmail.png');

const Auth: React.FC = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const [country, setCountry] = useState('IN');
  const [countryCode, setCountryCode] = useState('+91');
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log('heyy sudevcvv');

    const showSub = Keyboard.addListener('keyboardDidShow', e => {
      Animated.timing(translateY, {
        // toValue: -e.endCoordinates.height + 40, // move up (adjust if needed)
        toValue: -e.endCoordinates.height * 0.4,

        duration: 280,
        useNativeDriver: true,
      }).start();
    });

    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 260,
        useNativeDriver: true,
      }).start();
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* <StatusBar hidden={Platform.OS === 'android'} /> */}

      <View style={styles.header}>
        <View style={styles.headerDecorRow} />
        <Text style={styles.headerBrandText}>treats24</Text>
        <Text style={styles.appTagline}>India&apos;s #1 Food Delivery</Text>
        <Text style={styles.appSubTagline}>and Dining App</Text>
      </View>

      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -40}
      > */}
      <Animated.View style={{ flex: 1 }}>
        <ScrollView
          automaticallyAdjustKeyboardInsets
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="interactive"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, ...styles.contentWrapper }}
        >
          {/* main login  cintainer */}
          <View>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <Text style={styles.authSubtitle}>
                Log in to continue and get the best from the app
              </Text>
            </View>
            <PhoneInput
              label="Phone Number"
              country="IN"
              countryCode="+91"
              value={phone}
              onChange={setPhone}
              onCountryPress={() => setModalVisible(true)} // open country picker
              error={error}
            />
            <View style={styles.ForgotPass}>
              <TouchableOpacity>
                <Text style={styles.forgotPassText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => navigation.navigate('OTPVerification' as never)}
            >
              <Text style={styles.primaryButtonText}>Continue</Text>
            </TouchableOpacity>
           
         
          
            <View style={styles.orRow}>
              <View style={styles.orDivider} />
              <Text style={styles.orText}>Or, login with</Text>
              <View style={styles.orDivider} />
            </View>
            {/* social login */}
            <View style={styles.socialLoginContainer}>
              <TouchableOpacity style={styles.socialBtn}>
                <Image source={googleIcon} style={styles.socialIcon} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialBtn}>
                <Image source={mailIcon} style={styles.socialIcon} />
              </TouchableOpacity>
            </View>
            
            {/* footer content */}
            <Text style={styles.footerText}>
              By continuing, you agree to our
            </Text>
            <View style={styles.footerLinksRow}>
              <Text style={styles.footerLink}>Terms of Service</Text>
              <Text style={styles.footerLink}>Privacy Policy</Text>
              <Text style={styles.footerLink}>Content Policies</Text>
            </View>
          </View>

          {/* otp container */}
          <View></View>
        </ScrollView>
      </Animated.View>

      {/* </KeyboardAvoidingView> */}

      <CountryModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={(iso, code) => {
          setCountry(iso);
          setCountryCode(code);
        }}
      />
    </View>
  );
};

export default Auth;
