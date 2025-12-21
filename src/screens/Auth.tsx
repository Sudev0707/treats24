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
  ImageBackground,
} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from '../styles/screens/AuthStyles';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PhoneInput from '../components/inputs/PhoneInput';
import CountryModal from '../components/modals/CountryModals';
import InputField from '../components/inputs/InputField';
import {
  getCountryCode,
  getCountry,
  storeCountryCode,
  storeCountry,
} from '../services/storage';
import EmailLogin from '../components/EmailLogin';
const googleIcon = require('../assets/icons/iconsgoogle.png');
const mailIcon = require('../assets/icons/iconsmail.png');

const Auth: React.FC = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [showEmailLogin, setShowEmailLogin] = useState(false);

  const [country, setCountry] = useState('IN');
  const [countryCode, setCountryCode] = useState('+91');
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log('heyy sudevcvv');

    const showSub = Keyboard.addListener('keyboardDidShow', e => {
      Animated.timing(translateY, {
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

    // Load stored country code and country on component mount
    const loadStoredData = async () => {
      const storedCountryCode = await getCountryCode();
      const storedCountry = await getCountry();
      if (storedCountryCode) {
        setCountryCode(storedCountryCode);
      }
      if (storedCountry) {
        setCountry(storedCountry);
      }
    };
    loadStoredData();

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <View style={[styles.container, { justifyContent: 'flex-end' }]}>
      {/* <StatusBar hidden={Platform.OS === 'android'} /> */}

      <View style={styles.header}>
        {/* <View style={styles.headerDecorRow} /> */}

        <View style={styles.headerContent}>
          
          <Text style={styles.headerBrandText}>treats24</Text>
          <Text style={styles.appTagline}>India's #1 Food Delivery</Text>
          <Text style={styles.appSubTagline}>and Dining App</Text>
        </View>
      </View>

      {/* auth container */}
      <Animated.View style={{}}>
        <ScrollView
          automaticallyAdjustKeyboardInsets
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="interactive"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, ...styles.contentWrapper }}
        >
          {/* main login  cintainer */}
          <View>
            {showEmailLogin ? (
              <EmailLogin
                setShowEmailLogin={setShowEmailLogin}
                navigation={navigation}
              />
            ) : (
              <>
                <View style={{ alignItems: 'center', marginBottom: 5 }}>
                  <Text style={styles.authSubtitle}>
                    Log in to continue and get the best from the app
                  </Text>
                </View>

                <View style={styles.orRow}>
                  <View style={styles.orDivider} />
                  <Text style={styles.orText}>Log in or signup</Text>
                  <View style={styles.orDivider} />
                </View>

                <View style={{ marginVertical: 15 }}>
                  <PhoneInput
                    label=""
                    country={country}
                    countryCode={countryCode}
                    value={phone}
                    onChange={setPhone}
                    onCountryPress={() => setModalVisible(true)} // open country picker
                    error={error}
                  />
                </View>

                <View style={styles.Rememberme}>
                  <TouchableOpacity>
                    <Text style={styles.forgotPassText}>Remember me</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity>
                <Text style={styles.forgotPassText}>Forgot Password?</Text>
              </TouchableOpacity> */}
                </View>
                <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={() =>
                    navigation.navigate('OTPVerification' as never)
                  }
                >
                  <Text style={styles.primaryButtonText}>Continue</Text>
                </TouchableOpacity>

                {/* <View style={styles.orRow}>
                  <View style={styles.orDivider} />
                  <Text style={styles.orText}>Or, login with</Text>
                  <View style={styles.orDivider} />
                </View>
             
                <View style={styles.socialLoginContainer}>
                  <TouchableOpacity style={styles.socialBtn}>
                    <Image source={googleIcon} style={styles.socialIcon} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.socialBtn}
                    onPress={() => setShowEmailLogin(true)}
                  >
                    <Image source={mailIcon} style={styles.socialIcon} />
                  </TouchableOpacity>
                </View> */}

                {/* footer content */}
                <Text style={styles.footerText}>
                  By continuing, you agree to our
                </Text>
                <View style={styles.footerLinksRow}>
                  <Text style={styles.footerLink}>Terms of Service</Text>
                  <Text style={styles.footerLink}>Privacy Policy</Text>
                  <Text style={styles.footerLink}>Content Policies</Text>
                </View>
              </>
            )}
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

// const EmailLogin = ({
//   setShowEmailLogin,
//   navigation,
// }: {
//   setShowEmailLogin: (value: boolean) => void;
//   navigation: any;
// }) => {
//   const [email, setEmail] = useState('');

//   return (
//     <View>
//       <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity onPress={() => setShowEmailLogin(false)}>
//           <Image
//             source={require('../assets/icons/iconsback.png')}
//             style={{ width: 24, height: 24, borderRadius: 7 }}
//           />
//         </TouchableOpacity>
//         <Text style={styles.emailLoginTitle}>Login with Email</Text>
//       </View>

//       <View style={{ marginTop: 30, marginBottom: 10 }}>
//         <Text
//           style={{
//             fontSize: 14,
//             color: '#666',
//           }}
//         >
//           Enter your email to continue ordering
//         </Text>
//       </View>

//       <View style={{ marginBottom: 15 }}>
//         <InputField
//           label="Email"
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChangeText={setEmail}
//           variant="floating"
//         />
//       </View>

//       <TouchableOpacity
//         style={styles.primaryButton}
//         onPress={() => navigation.navigate('MainTabs' as never)}
//       >
//         <Text style={styles.primaryButtonText}>Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

export default Auth;
