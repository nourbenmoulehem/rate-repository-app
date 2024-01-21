import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import Constants from 'expo-constants';

import Main from './src/components/Main';

const App = () => {

  const env = Constants.expoConfig.extra.env;
  console.log("🚀 ~ App ~ env:", env);  
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;