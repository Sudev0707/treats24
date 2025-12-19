import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/screens/OTPVerificationStyles';
import Header from '../components/common/Header';

const OTPVerification: React.FC = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  // console.log(otp);
  const [otpError, setOtpError] = useState('');

  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputRefs = useRef<TextInput[]>([]);

  const handleOtpChange = (value: string, index: number) => {
    setOtpError('');

    if (value.length > 1) return; // Only allow single digit

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const otpString = otp.join('');

    if (otpString.length !== 6) {
      // Alert.alert("error", "please enter a valid 6 digit otp");
      setOtpError('Please enter a valid 6-digit OTP');

      return;
    }
    if (otpString === '123456') {
      setOtpError('');
      navigation.navigate('SetLocation' as never);
    } else {
      setOtpError('Invalid OTP');
      // Alert.alert('error', 'Invalid otp');
    }

    //  navigation.navigate('MainTabs' as never);
    // const otpString = otp.join('');
    // if (otpString.length === 6) {
    //   // Here you would typically verify the OTP with your backend
    //   // For now, just navigate to dashboard
    //   navigation.navigate('MainTabs' as never);
    // } else {
    //   Alert.alert('Error', 'Please enter a valid 6-digit OTP');
    // }
  };

  const handleResend = () => {
    // Here you would typically resend the OTP
    Alert.alert('OTP Resent', 'A new OTP has been sent to your phone number');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <View style={styles.headerDecorRow} />
        <Text style={styles.headerBrandText}>treats24</Text>
      </View> */}
      <StatusBar barStyle={'dark-content'} />
      <Header showBackButton={true} />

      <ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.contentWrapper}>
          <View style={styles.card}>
            <Text style={styles.title}>Verify Phone Number</Text>
            <Text style={styles.subtitle}>
              Enter the 6-digit code sent to your phone
            </Text>
            <Text>{otp}</Text>

{/* phone otp  */}
            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={ref => {
                    if (ref) inputRefs.current[index] = ref;
                  }}
                  style={[
                    styles.otpInput,
                    focusedIndex === index && styles.otpInputFocused,
                    otpError && styles.otpInputError,
                  ]}
                  value={digit}
                  onChangeText={value => handleOtpChange(value, index)}
                  onKeyPress={e => handleKeyPress(e, index)}
                  onFocus={() => setFocusedIndex(index)}
                  onBlur={() => setFocusedIndex(null)}
                  keyboardType="numeric"
                  maxLength={1}
                  selectTextOnFocus
                />
              ))}
            </View>
            {otpError ? <Text style={styles.errorText}>{otpError}</Text> : null}


            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>Didn't receive the code?</Text>
              <TouchableOpacity
                style={styles.resendButton}
                onPress={handleResend}
              >
                <Text style={styles.resendButtonText}>Resend OTP</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleVerify}
            >
              <Text style={styles.primaryButtonText}>Verify</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
              By continuing, you agree to our Terms of Service and Privacy
              Policy
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OTPVerification;
