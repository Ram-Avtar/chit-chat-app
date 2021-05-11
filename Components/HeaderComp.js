import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderComp = (props) => {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.HeaderText}>
              {
                props.title
              }
        </Text>
    </View>
  )
}
const styles=StyleSheet.create({
  headerContainer:{
    backgroundColor:"#00fff0",
    borderWidth:1,
    borderRadius:50,
    borderBottomEndRadius:50,
    borderBottomStartRadius:50,
    margin:3,
    borderColor:'#00fff0'
  },
  HeaderText:{
    color:"white",
    fontWeight:'bold',
    fontSize:30,
    padding:50,
    textAlign:"center",
  }
})
export default HeaderComp;
