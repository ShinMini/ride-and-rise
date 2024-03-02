import SettingProvider from 'contexts/SettingProvider';
import Main from './src/Main';

import 'i18n';
import ReactQueryProvider from 'contexts/ReactQueryProvider';

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.debug("Reactotron Configured"));
}

export default function App() {
  return (
    <SettingProvider>
      <ReactQueryProvider>
        <Main />
      </ReactQueryProvider>
    </SettingProvider>
  );
}