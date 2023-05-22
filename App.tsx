/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View, Button} from 'react-native';
import {scanPassport} from './src';

function App(): JSX.Element {
  const scanDocument = () => {
    scanPassport({
      birthDate: '1994-01-13T00:00:00Z',
      expiryDate: '2030-08-19T00:00:00Z',
      passportNumber: 'A28L66194',
      useNewVerificationMethod: true,
    }).then(res => {
      if ('error' in res) {
        console.log(res.error);
        return;
      }
      console.log(res);
    });
  };
  return (
    <SafeAreaView>
      <View>
        <Button title={'scanDoc'} onPress={scanDocument} />
      </View>
    </SafeAreaView>
  );
}

export default App;
