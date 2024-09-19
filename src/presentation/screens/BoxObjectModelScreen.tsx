import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Box Object Screen</Text> */}
      <View style={styles.purpleBox}>
        <Text style={{color: 'white'}}>Hola mundo</Text>
      </View>
      {/* <View style={styles.purpleBox}></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    height: 50,
  },
  title: {
    borderWidth: 10,
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    marginHorizontal: 20,
    marginVertical: 50,
  },
});
