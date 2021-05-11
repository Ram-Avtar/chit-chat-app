import 'react-native-gesture-handler';
import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { 
  createNativeStackNavigator
 } from 'react-native-screens/native-stack';
import SignUp from './Register/SignUp';
import SignIn from './Register/SignIn';



enableScreens();
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={()=>({
          headerShown:false,
        })
      }
      
      >
        <Stack.Screen name='signUp' component={SignUp} />
        <Stack.Screen name='signin' component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation;
