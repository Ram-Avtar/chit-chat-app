import 'react-native-gesture-handler';
import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { 
  createNativeStackNavigator
 } from 'react-native-screens/native-stack';
import SignUp from './Register/SignUp';
import SignIn from './Register/SignIn';
import HomeScreen from './Chat/HomeScreen';
import AddFriend from './Chat/AddFriend';
import ChatBox from './Chat/ChatBox';



enableScreens();
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown:false
        }}>
        <Stack.Screen
          name='signin' component={SignIn}/>
        <Stack.Screen
          name='signup' component={SignUp} />
        <Stack.Screen
          name='home' component={HomeScreen}
          options={{headerShown:true}}
        />
        <Stack.Screen
          name='addfriend' component={AddFriend}
          options={{headerShown:true}}
        />
        <Stack.Screen
          name='chatbox' component={ChatBox}
          options={{headerShown:true}}
        />
      
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation;
