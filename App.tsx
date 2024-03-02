import SettingProvider from 'contexts/SettingProvider';
import Main from './src/Main';

import 'i18n';
import ReactQueryProvider from 'contexts/ReactQueryProvider';

export default function App() {
  return (
    <SettingProvider>
      <ReactQueryProvider>
        <Main />
      </ReactQueryProvider>
    </SettingProvider>
  );
}