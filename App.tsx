import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons';
import {
  BoxObjectModelScreen,
  HelloWorldScreen,
  CounterScreen,
  CounterM3Screen,
  DimentionScreen,
} from './src/presentation/screens';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name={'Dylan Yair Gonzalez'} /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        <DimentionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
