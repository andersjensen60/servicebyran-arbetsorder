import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import MainComponent from './src/components/MainComponent';
import Footer from './src/components/Footer';


export default function App() {

  if (Platform.OS === 'android') {
  return (
    <View style={styles.androidContainer}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.main}>
        <Text style={styles.titleText}>Arbetsorder</Text>
        <MainComponent />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.main}>
          <Text style={styles.titleText}>Arbetsorder</Text>
          <MainComponent />
        </View>
        <View style={styles.footer}>
          <Footer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  androidContainer: {
    flex: 1,
    paddingTop: 24,
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  main: {
    flex: 8,
    marginTop: 50,
    marginLeft: '5%',
    width: '90%',
  },
  footer: {
    flex: 1,
    width: '100%',
  },
  titleText: {
    color: '#5784c4',
    fontSize: 22,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
