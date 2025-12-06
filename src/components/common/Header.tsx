import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderStyles from '../../styles/components/HeaderStyles';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  rightMenu?: React.ReactNode;
  leftContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  onBackPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  rightMenu,
  leftContent,
  centerContent,
  onBackPress,
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={HeaderStyles.container}>
      <View style={HeaderStyles.leftContainer}>
        {leftContent ? (
          leftContent
        ) : (
          showBackButton && (
            <TouchableOpacity onPress={handleBackPress} style={HeaderStyles.backButton}>
              <Image source={require('../../assets/icons/iconsback.png')} style={{width: 24, height: 24}} />
            </TouchableOpacity>
          )
        )}
      </View>
      <View style={HeaderStyles.centerContainer}>
        {centerContent ? (
          centerContent
        ) : (
          title && <Text style={HeaderStyles.title}>{title}</Text>
        )}
      </View>
      <View style={HeaderStyles.rightContainer}>
        {rightMenu}
      </View>
    </View>
  );
};

export default Header;
