# react-native-testmany

test

## Installation

```sh
npm install react-native-id-passport-nfc-reader
```

## Usage

```js
import { scanPassport } from 'react-native-id-passport-nfc-reader';
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
// ...




