/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NativeModules, Platform} from 'react-native';
import type {PassportOptions} from './Interfaces/PassportOptions';
import { NFCPassportModel } from './Interfaces/NFCPassportModel';

const LINKING_ERROR =
  "The package 'react-native-id-passport-nfc-reader' doesn't seem to be linked. Make sure: \n\n" +
  Platform.select({ios: "- You have run 'pod install'\n", default: ''}) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const NfcReader = NativeModules.NfcReader
  ? NativeModules.NfcReader
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      },
    );

    export function scanPassport(
      options: PassportOptions
    ): Promise<NFCPassportModel | { error: string }> {
      return NfcReader.scanPassport(options);
    }

    export * from './Interfaces'