import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import styles from '../styles/components/EmailLoginStyles';
import InputField from './inputs/InputField';

const EmailLogin = ({
  setShowEmailLogin,
  navigation,
}: {
  setShowEmailLogin: (value: boolean) => void;
  navigation: any;
}) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [showOtp, setShowOtp] = useState(false);
  const [otpError, setOtpError] = useState('');
  const inputRefs = useRef<TextInput[]>([]);

  // 📩 Send OTP
  const handleSendOtp = () => {
    if (!email || !email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email');

      return;
    }

    // 👉 API call to send OTP here
    console.log('OTP sent to:', email);

    setShowOtp(true);
  };

  // 🔢 Handle OTP input
  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    setOtpError('');
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // auto verify on last digit (optional)
    if (index === 5 && value) {
      handleVerifyEmailOtp(newOtp);
    }
  };

  // ✅ Verify OTP
  const handleVerifyOtp = () => {
    const otpString = otp.join('');

    if (otpString.length !== 6) {
      setOtpError('Please enter 6-digit OTP');
      return;
    }

    if (otpString === '123456') {
      navigation.navigate('MainTabs' as never);
    } else {
      setOtpError('Invalid OTP');
    }
  };

  //
  const handleVerifyEmailOtp = (otpArray = otp) => {
    const otpString = otpArray.join('');

    if (otpString.length !== 6) {
      setOtpError('Please enter 6-digit OTP');
      return;
    }

    try {
      const res = fetch(``, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.log(error);
    }

    if (otpString === '123456') {
      navigation.navigate('MainTabs' as never);
    } else {
      setOtpError('Invalid OTP');
    }
  };

  //
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  //   =============
  const handleSendEmailOtp = async () => {
    try {
    } catch (error) {}
  };

  return (
    <View>
      {/* 🔙 Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => setShowEmailLogin(false)}>
          <Image
            source={require('../assets/icons/iconsback.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <Text style={styles.emailLoginTitle}>
          {showOtp ? 'Verify OTP' : 'Login with Email'}
        </Text>
      </View>

      {/* 📧 EMAIL STEP */}
      {!showOtp && (
        <>
          <Text style={styles.subtitle}>
            Enter your email to continue ordering
          </Text>

          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            variant="floating"
          />

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleSendOtp}
          >
            <Text style={styles.primaryButtonText}>Send OTP</Text>
          </TouchableOpacity>
        </>
      )}

      {/* 🔢 OTP STEP */}
      {showOtp && (
        <>
          <Text style={styles.subtitle}>
            Enter the 6-digit OTP sent to {email}
          </Text>

          {/* email otp */}
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => {
                  if (ref) inputRefs.current[index] = ref;
                }}
                style={[styles.otpInput, otpError && styles.otpInputError]}
                value={digit}
                onChangeText={value => handleOtpChange(value, index)}
                onKeyPress={e => handleKeyPress(e, index)}
                keyboardType="numeric"
                maxLength={1}
                textAlign="center"
              />
            ))}
          </View>

          {otpError ? <Text style={styles.errorText}>{otpError}</Text> : null}

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleVerifyOtp}
          >
            <Text style={styles.primaryButtonText}>Verify & Continue</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default EmailLogin;
