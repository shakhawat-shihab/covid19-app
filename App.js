import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import Text from './src/components/Text/Text';
import Home from './src/screens/Home/Home';

export default function App() {

  const [loaded] = useFonts({
    GraphikRegular: require('./src/fonts/GraphikRegular.otf'),
    GraphikSemiBold: require('./src/fonts/GraphikSemibold.otf'),
    SFProRegular: require('./src/fonts/SFProRegular.ttf')
  });

  return (
    <SafeAreaView style={styles.container}>
      <Home></Home>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
