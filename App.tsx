import React from 'react';
import { View, Text } from 'react-native';
import AppRoutes from './src/routes/AppRoutes';
import AuthRoutes from './src/routes/AuthRoutes';
import InternetConnectionNotifier from './src/components/common/InternetConnectionNotifier';

const App = () => {
  const token = false;
  return (
    <>
      <InternetConnectionNotifier />
      {/* {!token ? <AuthRoutes /> : <AppRoutes />} */}
      <AppRoutes />
    </>
  );
};

export default App;
