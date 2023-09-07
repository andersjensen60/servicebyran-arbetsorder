import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
         <Text style={styles.footerText}>&#169; Servicebyrån AB 2023</Text>

    </View>
  );
};

const styles = StyleSheet.create({
    footer: {
      backgroundColor: '#5784c4',
      width: '100%',
      height: 80,
      padding: 10,
      justifyContent: 'center',
      alignContent: 'center',
    },
    footerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
  },
  });

export default Footer;