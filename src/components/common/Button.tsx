import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import ButtonStyles from '../../styles/components/ButtonStyles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant: 'filled' | 'outlined';
  style?: any;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, variant, style }) => {
  const buttonStyle = [
    ButtonStyles.base,
    variant === 'filled' ? ButtonStyles.filled : ButtonStyles.outlined,
    style,
  ];

  const textStyle =
    variant === 'filled' ? ButtonStyles.filledText : ButtonStyles.outlinedText;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} activeOpacity={0.6}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
