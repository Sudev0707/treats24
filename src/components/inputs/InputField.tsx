import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../styles/components/InputFieldStyles';
import colors from '../../theme/colors';

interface Props {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  type?: 'text' | 'password';
}

const InputField: React.FC<Props> = ({
  label,
  placeholder,
  value,
  onChangeText,
  type = 'text',
}) => {
  const [focused, setFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(type === 'password');
  const animatedLabel = useRef(new Animated.Value(value ? 1 : 0)).current;
  const isPassword = type === 'password';

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: focused || value ? 1 : 0,
      duration: 180,
      useNativeDriver: false,
    }).start();
  }, [focused, value]);

  /** ⬇⬇ ADD (or REPLACE) THIS HERE */
  const labelStyle = {
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [18, -10], // Center → Float above border
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: focused ? colors.brandPrimary : '#A3A3A3',
  };
  /** ⬆⬆ END */

  return (
    <View style={[styles.container, focused && styles.active]}>
      <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>

      <TextInput
        style={styles.input}
        placeholder={!focused ? placeholder : ''}
        placeholderTextColor="#A8A8A8"
        secureTextEntry={isPassword && hidePassword}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />

      {isPassword && (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setHidePassword(!hidePassword)}
        >
          <Icon
            name={hidePassword ? 'eye-off' : 'eye'}
            size={20}
            color="#8E8E8E"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
