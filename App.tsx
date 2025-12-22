import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppRoutes from './src/routes/AppRoutes';
import AuthRoutes from './src/routes/AuthRoutes';
import InternetConnectionNotifier from './src/components/common/InternetConnectionNotifier';
//
import { getDBConnection } from './src/database/db';
import { createLocationTable } from './src/database/tables';
import { getCurrentLocationWithAddress } from './src/utils/locationService';
import { saveLocation } from './src/database/queries';

const App: React.FC = () => {
  const token = true;
  useEffect(() => {
    const initApp = async () => {
      try {
        //open db
        const db = await getDBConnection();

        // create location table
        await createLocationTable(db);

        //  fetch location
        getCurrentLocationWithAddress(async location => {
          await saveLocation(db, location);
          // console.log();
        });
      } catch (error) {
        console.log('APP INIT ERROR:', error);
      }
    };

    initApp();
  }, []);
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
    // backgroundColor: '#de8e8eff',
  },
});
