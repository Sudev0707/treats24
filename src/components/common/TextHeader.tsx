import React from 'react';
import { Text } from 'react-native';
import TextHeaderStyles from '../../styles/components/TextHeaderStyles';

interface TextHeaderProps {
  type: 'primary' | 'secondary' | 'tertiary' | 'labeled';
  children: React.ReactNode;
}

const TextHeader: React.FC<TextHeaderProps> = ({ type, children }) => {
  return <Text style={TextHeaderStyles[type]}>{children}</Text>;
};

export default TextHeader;
