
import React from 'react';

import {
  StyleSheet,
  View,
  Text,

} from 'react-native';
import MainNavigation from './Components/MainNavigation';
import SignUp from './Components/Register/SignUp';

const App=()=>{
  return(
    <View style={styles.container}>
      <MainNavigation />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    // backgroundColor:'#c8dde3'
  },

});

export default App;
