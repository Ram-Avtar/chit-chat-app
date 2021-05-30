import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet,KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import {Text, View} from 'react-native';
import {Input,Button, Icon} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';


import HeaderComp from '../HeaderComp';
import LogoImage from '../LogoImage';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [img, setImg] = useState('');
  const [pass, setPass] = useState('');

  const registor = () => {
    auth().createUserWithEmailAndPassword(mail, pass)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:img ||'../../assets/images/default.png',
        });
      }).catch((error) => alert(error.message));
  }

  return (
   <ScrollView>
      
   
    <KeyboardAvoidingView>
        <LogoImage />
        <View style={styles.signUp}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Sign Up</Text>
          </View>
          
          <View style={styles.inputcontainer}>
            {/* <Text style={styles.inputTitle}>Enter Your Name</Text> */}
            <Input 
            placeholder='Enter your Full Name'
            autoFocus
            type='text'
            value={name}
              leftIcon={
                <MaterialIcons
                name="account-circle"
                size={24}
                color='black'
              />
              }
            onChangeText={(text)=>setName(text)}
            />
          </View>
          <View style={styles.inputcontainer}>
            {/* <Text style={styles.inputTitle}>Enter Your Email</Text> */}
            <Input 
            placeholder='Email'
            type='email'
            value={mail}
              leftIcon={
                <MaterialIcons
                name="mail"
                size={24}
                color='black'
              />
              }
            onChangeText={(text)=>setMail(text)}
            />
        </View>
        <View style={styles.inputcontainer}>
            {/* <Text style={styles.inputTitle}>Enter Your Name</Text> */}
            <Input 
            placeholder='profile image'
            type='text'
            value={img}
              leftIcon={
                <MaterialIcons
                name="account-circle"
                size={24}
                color='black'
              />
              }
            onChangeText={(text) => setImg(text)}
            onSubmitEditing={registor}
            />
          </View>
          <View style={styles.inputcontainer}>
            {/* <Text style={styles.inputTitle}>Enter Your Password</Text> */}
            <Input 
            placeholder='Password'
            type='password'
            value={pass}
              leftIcon={
                <MaterialIcons
                raised
                name="lock"
                size={24}
                color='black'
              />
              }
            secureTextEntry={true}
            onChangeText={(text)=>setPass(text)}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button 
            type="solid"
             titleStyle={
               {
                 fontWeight:'bold',
                 fontSize:20,
                 color:'black',
                 padding:35

                }
             }
             containerStyle={{
               width: 330,
               marginVertical: 10,
               borderWidth:.5
              
             }}
            title='Sing Up'
          onPress={registor}
            />
            <Button 
            type="outline"
            titleStyle={{
              fontWeight:'bold',
              fontSize:20,
              color:'black',
              padding:35
              
            }
            }
            containerStyle={{
              width: 330,
              marginVertical: 10,
              borderWidth:.5
            }}
            title='Sign In'
            onPress={()=>navigation.navigate("signin")}
            />
          </View>
      </View>
      </KeyboardAvoidingView>
      </ScrollView>
  )
}

const styles=StyleSheet.create({
  signUp:{
    // backgroundColor:"#00fff0",
    borderWidth:1,
    borderRadius:50,
    borderBottomEndRadius:50,
    borderBottomStartRadius:50,
    margin:3,
    // borderColor:'#00fff0',
  
  },

  title:{
    margin:20,
    fontWeight:'bold',
    fontSize:30,
    color:'black'
  },
  inputcontainer:{
    marginHorizontal:20,
    marginVertical:10
  },
btnContainer:{
  marginTop: 25,
  marginBottom: 25,
  justifyContent: 'center',
  alignItems:'center'
  },
inputTitle:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    marginLeft:15
  },
titleContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
  }
})

export default SignUp;
