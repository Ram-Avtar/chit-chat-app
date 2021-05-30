import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input,Button } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';


const AddFriend = () => {
  const navigation = useNavigation();
  const [add, setAdd] = useState('');
  const added =async () => {
    await firestore().collection('chats').add({
      friendname: add
    }).then(() => navigation.goBack())
      .catch((error) => alert(arror));
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add Your Friends",
      headerTitleAlign:'center',
        headerTintColor:'black',
        headerStyle:{
          backgroundColor:'#00fff0'
        },
        headerTitleStyle:{
          fontSize:30,
          fontWeight:'bold'  
        },
    })
  },[])

  return (
    <View style={styles.container}>
      <Input 
            placeholder='Enter your Friend Name'
            type='text'
            value={add}
              leftIcon={
                <MaterialIcons
                name="person-add-alt-1"
                size={30}
                color='black'
              />
              }
              onSubmitEditing={added}
            onChangeText={(text)=>setAdd(text)}
      />
      <Button
        title='Add Friend'
        type='solid'
        buttonStyle={{
          width: 200,
        }}
        onPress={added}
      />
    </View>
  )
}

export default AddFriend;

const styles = StyleSheet.create({
  container: {
    alignItems:'center'
  }
})
