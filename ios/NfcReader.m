#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(NfcReader, NSObject)

RCT_EXTERN_METHOD(scanPassport:(NSDictionary *) options
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
