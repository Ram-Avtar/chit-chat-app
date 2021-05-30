import React from 'react'
import { Image, StyleSheet, View } from 'react-native';

const LogoImage = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../assets/images/chitchat1.png')}
        style={styles.logo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems:'center'
  },
  logo: {
    width: 150,
    height:150
  }
})
export default LogoImage;
