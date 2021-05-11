import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import {Text, View} from 'react-native';
import {Input,Button} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



import HeaderComp from '../HeaderComp';

const SignUp = () => {
  return (
    <ScrollView>
    <View>
        <HeaderComp title='Registration From' />
        <View style={styles.signUp}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.title}>Sign In</Text>
          </View>
          
          <View style={styles.inputcontainer}>
            <Text style={styles.inputTitle}>Enter Your Name</Text>
            <Input 
              placeholder='Enter your Full Name'
              leftIcon={
                <MaterialIcons
                name="account-circle"
                size={24}
                color='black'
              />
              }
            />
          </View>
          <View style={styles.inputcontainer}>
            <Text style={styles.inputTitle}>Enter Your Email</Text>
            <Input 
              placeholder='Email'
              leftIcon={
                <MaterialIcons
                name="mail"
                size={24}
                color='black'
              />
              }
            />
          </View>
          <View style={styles.inputcontainer}>
            <Text style={styles.inputTitle}>Enter Your Password</Text>
            <Input 
              placeholder='Password'
              leftIcon={
                <MaterialIcons
                raised
                name="lock"
                size={24}
                color='black'
              />
              }
              secureTextEntry={true}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button 
            type="outline"
             titleStyle={
               {
                 fontWeight:'bold',
                 fontSize:20,
                 color:'white',
  
                 padding:35

                }
             }
             containerStyle={{
              marginRight:15
             }}
            title='Sing Up'
            />
            <Button 
            type="outline"
            titleStyle={{
              fontWeight:'bold',
              fontSize:20,
              color:'white',
              padding:35
              
            }
            }
            containerStyle={{
              marginLeft:15
            }}
            title='Clear'
            />
          </View>
        </View>
    </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  signUp:{
    backgroundColor:"#00fff0",
    borderWidth:1,
    borderRadius:50,
    borderBottomEndRadius:50,
    borderBottomStartRadius:50,
    margin:3,
    borderColor:'#00fff0'
  },

  title:{
    margin:20,
    fontWeight:'bold',
    fontSize:25,
    color:'white'
  },
  inputcontainer:{
    marginHorizontal:20
  },
  btnContainer:{

margin: 20,
flexDirection:'row',
alignContent:'space-between',
padding:20
  },
  inputTitle:{
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    marginLeft:15
  },
  titleContainer:{
    flexDirection:'row'
  }
})

export default SignUp;
