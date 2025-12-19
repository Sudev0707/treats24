import { PermissionsAndroid, Platform, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';


// -----
export const requestLocationPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'ios') return true;

  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Location Permission',
      message: 'App needs access to your location',
      buttonPositive: 'OK',
    },
  );

  return granted === PermissionsAndroid.RESULTS.GRANTED;
};



// ======
export const getCurrentLocationWithAddress = async (onSuccess: (data: {
latitude: number;
longitude: number;
area?: string;
city?: string;
state?: string;
pincode?: string;
country?: string;
} )=> void  ) => {
    const hasPermission = await requestLocationPermission();

    if(!hasPermission){
        Alert.alert("permission denied");
        return;
    }


    Geolocation.getCurrentPosition(
        async position => {
            const {latitude, longitude}= position.coords;


            try {
                const response = await fetch(``)
            } catch (error) {
                
            }
        }
    )






}



type LocationSuccessCallback = (coords: {
  latitude: number;
  longitude: number;
}) => void;

export const getCurrentLocation = async (
  onSuccess: LocationSuccessCallback,
) => {
  const hasPermission = await requestLocationPermission();

  if (!hasPermission) {
    Alert.alert('Permission denied');
    return;
  }

  Geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      onSuccess({ latitude, longitude });
    },
    error => {
      Alert.alert('Location Error', error.message);
    },
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
    },
  );
};
