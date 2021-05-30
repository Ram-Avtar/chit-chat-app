import { useRoute } from '@react-navigation/native';
import React from 'react'
import { StyleSheet } from 'react-native';
import { ListItem ,Avatar } from 'react-native-elements';

const FriendList = ({id,friendname, enterFriend}) => {
  const route = useRoute();
  // console.log('friend data', route)
  // const data=route
  return (
    <ListItem key={id } onPress={()=>enterFriend(id,friendname)} bottomDivider>
      <Avatar
        rounded
        source={require('../../assets/images/default.png')}
      />
        <ListItem.Content>
          <ListItem.Title style={StyleSheet.listTitle}>{friendname}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1}
        ellipsizeMode='tail'
        >last msg </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
  )
}

const styles = StyleSheet.create({
  listTitle: {
    fontWeight: 'bold',
  }
})
export default FriendList;
