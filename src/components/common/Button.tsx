import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import ButtonStyles from '../../styles/components/ButtonStyles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant: 'filled' | 'outlined';
  style?: any;
  isPhoneValid: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant,
  style,
  isPhoneValid,
}) => {
  const buttonStyle = [
    ButtonStyles.base,
    variant === 'filled'
      ? isPhoneValid
        ? ButtonStyles.filled
        : ButtonStyles.filledDisabled
      : ButtonStyles.outlined,
    style,
  ];

  const textStyle =
    variant === 'filled'
      ? isPhoneValid
        ? ButtonStyles.filledText
        : ButtonStyles.textDisabled
      : ButtonStyles.outlinedText;

  return (
    <TouchableOpacity
      disabled={!isPhoneValid}
      style={buttonStyle}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
