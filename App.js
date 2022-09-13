import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator,  } from '@react-navigation/bottom-tabs';

import Authorization from './screens/Authorization';
import MainScreen from './screens/MainScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomTab from './screens/BottomTab';
import PostDetailsScreen from './screens/PostDetailsScreen';

/*
const BottomTabs = createBottomTabNavigator();
function BottomTab(){  
  return(
    <BottomTabs.Navigator>
        <BottomTabs.Screen name="MainScreen" component={MainScreen} />
        <BottomTabs.Screen name="ProfileScreen" componnt={ProfileScreen} />        
    </BottomTabs.Navigator>
  );
}*/

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>      
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>          
          <Stack.Screen name='Auth' component={Authorization}/>                  
          <Stack.Screen name ='Main' component={MainScreen} />
          <Stack.Screen name ='Profile' component={ProfileScreen} />
          <Stack.Screen name='Bottom' component={BottomTab}/> 
          <Stack.Screen name='PostDetail' component={PostDetailsScreen}/>
        </Stack.Navigator>        
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
