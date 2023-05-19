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
      birthDate: '1993-04-08T00:00:00Z',
      expiryDate: '2024-12-12T00:00:00Z',
      passportNumber: 'BR3484971',
      useNewVerificationMethod: true,
    }).then((res) => {
      if ('error' in res) {
      console.log(res.error)
        return;
      }
      console.log(res)
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
