import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Image } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FriendList from './FriendList';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [addfriend, setAddfriend] = useState([]);
  const signOut = () => {
auth()
  .signOut()
  .then(()=>navigation.replace("signin"));

  }
  const addFriend = () => {
    navigation.navigate('addfriend');
  }

  useEffect(() => {
    const unsubscribe = firestore().collection('chats').onSnapshot((snap) => setAddfriend(snap.docs.map((doc) => ({
      id: doc.id,
      data:doc.data()
    }))))
    return unsubscribe;
  },[])
    useLayoutEffect(()=>{
  navigation.setOptions({
    title:'chat',
    headerTitleAlign:'center',
        headerTintColor:'black',
        headerStyle:{
          backgroundColor:'#00fff0'
        },
        headerTitleStyle:{
          fontSize:30,
          fontWeight:'bold'  
        },
    headerRight: () => (
      <View style={ styles.rightHeaderStyle}>
        <TouchableOpacity
         style={ styles.rightHeaderItemStyle}
          onPress={addFriend}
      sty>
        <MaterialIcons
        name="create"
          size={24}
          color='black'
        />
        </TouchableOpacity>
        <TouchableOpacity
        style={ styles.rightHeaderItemStyle}
          onPress={signOut}>
        <MaterialIcons
        name="logout"
          size={24}
          color='black'
        />
      </TouchableOpacity>
      </View>
      
     
    ),
    headerLeft:()=>(
      <Image source={require('../../assets/images/default1.png')}
      style={styles.imgStyle}
      />
    )
  })
    }, [])
  
  const enterFriend = (id , friendname) => {
    navigation.navigate('chatbox', {
      id,
      friendname
  })
}
  return (
    <SafeAreaView>
      <ScrollView>
        {
          addfriend.map(({ id, data: { friendname } }) => (
            <FriendList key={id} id={id}
              friendname={friendname}
            enterFriend={enterFriend}
            />
          ))
        }
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  imgStyle: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderRadius: 50,
    marginBottom:10
  },
  rightHeaderStyle: {
    flexDirection: 'row',
  },
  rightHeaderItemStyle: {
    marginHorizontal:10
  }
})
export default HomeScreen;
