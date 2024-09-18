import {useState} from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/global.styles';
import {FloatingButton} from '../components/share/FloatingButton';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(10);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <Text>Hola</Text>
      <FloatingButton onPress={() => onPress()} />
    </View>
  );
};
