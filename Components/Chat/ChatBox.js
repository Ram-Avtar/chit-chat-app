import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react'
import {
  SafeAreaView, StyleSheet, Text, View, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity, Keyboard,
TouchableWithoutFeedback } from 'react-native'
import { Avatar } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { FlatList } from 'react-native';



const ChatBox = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [msg, setMsg] = useState('');
    const [messages, setMessages] = useState([]);
   useLayoutEffect(() => {
     navigation.setOptions({
       title: "Chat Box",
       headerTitleAlign: 'center',
       headerTintColor: 'black',
       headerStyle: {
         backgroundColor: '#00fff0'
       },
       headerTitleStyle: {
         fontSize: 30,
         fontWeight: 'bold'
       },
       headerLeft: () => (
         <View style={styles.headerContainer}>
           <Avatar
             rounded
             source={require('../../assets/images/default.png')}
           />
           <Text style={styles.headerText}>
              {route.params.friendname}
           </Text>
         </View>
       )
    })
  },[navigation, messages])
  const sendMsg = () => {
    Keyboard.dismiss();

    firestore().collection('chats').doc(route.params.id).collection('messages').add({
      timestamp: firestore.FieldValue.serverTimestamp(),
      message: msg,
      displayName: auth().currentUser.displayName,
      email:auth().currentUser.email,
      photoURL:auth().currentUser.photoURL,
    });
  console.log('chat message ', messages)
    setMsg('');
  }
  
  useLayoutEffect(() => {
    const unsubscribe = firestore()
      .collection('chats')
      .doc(route.params.id)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snap) => setMessages(snap.docs.map((doc) => ({
        id: doc.id,
        data:doc.data()
      }))
      ))
    return unsubscribe;
  }, [route])
  console.log('route params field name ', route.params.id)
 
  return (
    <SafeAreaView style={{flex:1}}>
      <KeyboardAvoidingView
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            
            <ScrollView
              
              contentContainerStyle={{ paddingTop: 15 }}>
              {console.log("data ", messages.data)}
              { 
                messages.map(({ id, data }) =>
                  data.email === auth().currentUser.email ? (<View style={styles.reciever}>
                    <Avatar
                      position='absolute'
                      rounded
                      containerStyle={{
                        position: 'absolute',
                        bottom: -15,
                        right:-5,
                      }}
                      bottom={-15}
                      right={-5}
                      size={30}
                      source={{
                        uri:data.photoURL
                      }}
                      
                    />
                    <Text style={styles.recieverText}>
                      {data.message}
                    </Text>
                    
                </View>
                  ):(<View style={styles.sender}>
                      <Avatar
                      position='absolute'
                      rounded
                      containerStyle={{
                        position: 'absolute',
                        bottom: -15,
                        left:-5,
                      }}
                      bottom={-15}
                      left={-5}
                      size={30}
                      source={{
                        uri:data.photoURL,
                      }}
                    />
                    <Text style={styles.senderText}>
                      {data.message}
                      </Text>
                      <Text style={styles.recieverName}>
                      {data.displayName}
                    </Text>
                     
                </View>)
                )
          }
          </ScrollView>
          <View style={styles.inputContainer}>
              <TextInput
                placeholder="Message "
                value={msg}
                onChangeText={(text) => setMsg(text)}
                style={styles.textInput}
                onSubmitEditing={sendMsg}
            />
            <TouchableOpacity onPress={sendMsg}>
              <MaterialIcons
              name='send'
              size={25}
              color='black'
            />
            </TouchableOpacity>
            
          </View>

        </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ChatBox;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems:'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft:15
  },
  container: {
    flex:1
  },
  inputContainer: {
    // flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding:15
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex:1,
    backgroundColor: '#ECECEC', 
    padding: 10,
    color: 'grey',
    borderRadius: 30,
    marginRight: 15,
    borderWidth:1
  },
  sender: {
    padding:15,
    backgroundColor:'#2B68E6',
    alignSelf:'flex-start',
    borderRadius:20,
    margin:15,
    maxWidth:'80%',
    position:'relative'
  },
  senderName: {
    left: 10,
    paddingRight: 10,
    fontSize:10
  },
  senderText: {
    fontWeight: '500',
    marginLeft: 10,
    marginBottom:15
  },
  reciever: {
  padding:15,
  backgroundColor:'#ECECEC',
  alignSelf:'flex-end',
  borderRadius:20,
  margin:15,
  maxWidth:'80%',
  position:'relative'
  },
  recieverName: {
    
  },
  recieverText: {
    fontWeight: '500',
    marginLeft: 10,
    marginBottom:15
  }
})
