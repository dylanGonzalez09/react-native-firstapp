import {useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../components';

export const CounterScreen = () => {
  const [count, setCount] = useState(5);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>

      <PrimaryButton
        label="Incrementar"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />

      <PrimaryButton
        label="Decrementar"
        onPress={() => setCount(count - 1)}
        onLongPress={() => setCount(0)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
  },
});
