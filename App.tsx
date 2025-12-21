import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppRoutes from './src/routes/AppRoutes';
import AuthRoutes from './src/routes/AuthRoutes';
import InternetConnectionNotifier from './src/components/common/InternetConnectionNotifier';

const App = () => {
  const token = true;
  return (
    <>
      <View style={styles.container}>
        <InternetConnectionNotifier />
        {/* {!token ? <AuthRoutes /> : <AppRoutes />} */}
        <AppRoutes />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#de8e8eff',
  },
});
