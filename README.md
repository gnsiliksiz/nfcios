# react-native-idpassportnfc-reader

test

## Installation

```sh
npm install react-native-idpassportnfc-reader
```

## Usage

```js
import { scanPassport } from 'react-native-idpassportnfc-reader';
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
//Description
// React native allows you to scan using nfc for ID and passport only on ios platform




