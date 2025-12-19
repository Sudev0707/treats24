import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AlertStyles from '../../styles/components/AlertStyles';

const CustomAlert = ({
  visible,
  title,
  message,
  onClose,
}: {
  visible: boolean;
  title: string;
  message: string;
  onClose: () => void;
}) => {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={AlertStyles.overlay}>
        <View style={AlertStyles.alertBox}>
          <Text style={AlertStyles.title}>{title}</Text>
          <Text style={AlertStyles.message}>{message}</Text>

          <TouchableOpacity style={AlertStyles.button} onPress={onClose}>
            <Text style={AlertStyles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
