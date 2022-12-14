import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {isUserSignedIn} from '../controller/isUserSignedIn';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      isUserSignedIn()
        .then(res => {
          if (res) {
            // console.log('res', res);
            navigation.navigate('NavBar');
          } else {
            navigation.navigate('Login');
          }
        })
        .catch(err => {
          console.log('isUserSignedIn err', err);
          navigation.navigate('Login');
        });
    }, 2000);
  }, [AsyncStorage]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 35,
          color: '#0E2C4B',
          textTransform: 'uppercase',
          fontWeight: 'bold',
        }}>
        BASE APP
      </Text>
    </View>
  );
};

export default SplashScreen;

// "react-android": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && react-native run-android",
//     "clean:android": "cd android && ./gradlew clean && cd ../"
