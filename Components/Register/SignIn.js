import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native';
import {Text, View} from 'react-native';
import {Input,Button} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';

import LogoImage from '../LogoImage';



const SignIn = () => {
    const navigation = useNavigation();
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() =>{
    const unSubscrib = auth().onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigation.replace("home");
      }
    })
    return unSubscrib;
  }, [])

  const login = () => {
    auth().signInWithEmailAndPassword(mail, pass)
      .catch((error) => alert(error));
}



  return (
    <KeyboardAvoidingView>
      <LogoImage />
    <View style={styles.signUp}>
    <View style={styles.titleContainer}>
            <Text style={styles.title}>Sign In</Text>
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
        onChangeText={(text)=>setPass(text)}
        secureTextEntry={true}
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
            title='Sing In'
            onPress={login}
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
            title='Sign Up'
            onPress={()=>navigation.navigate('signup')}
      />
    </View>
      </View>
      </KeyboardAvoidingView>
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
    // borderColor:'#00fff0'
  },

  title:{
    margin:20,
    fontWeight:'bold',
    fontSize:30,
    color:'black'
  },
  titleContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  inputcontainer:{
    marginHorizontal: 20,
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
  }
})
export default SignIn;
