import React from 'react';
import { StyleSheet, Text, Image, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
         <Image
          source={require('../../assets/sb_logo.png')}
          style={{ width: 358, height: 83 }} resizeMode="contain"
        />
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 100, // Adjust as needed
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });

export default Header;