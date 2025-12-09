import React from 'react';
import { View, Text } from 'react-native';
import AppRoutes from './src/routes/AppRoutes';
import InternetConnectionNotifier from './src/components/common/InternetConnectionNotifier';
const App = () => {
  return (
    <>
     <InternetConnectionNotifier />
     <AppRoutes />
     {/* <View>
      <Text>Hello World</Text>
     </View> */}
    </>


)
};

export default App;
