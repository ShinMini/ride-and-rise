import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { NativeModules } from 'react-native';
import Reactotron from "reactotron-react-native";
import { reactotronRedux } from 'reactotron-redux';

let scriptHostname = 'localhost';

if (__DEV__) {
    const { scriptURL } = NativeModules.SourceCode;
    scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

Reactotron.clear();
const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: "Ride-And-Rise",
    host: scriptHostname,
  })
  .use(reactotronRedux())
  .useReactNative({
      asyncStorage: false,
      networking: {
          ignoreUrls: /symbolicate/,
      },
      editor: false,
      errors: { veto: stackFrame => false },
      overlay: false,
  })
  .connect();

console.tron = __DEV__ ? Reactotron : { log: () => {} };

export default reactotron;
