import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Import your screen components here
import Screen1 from './Comp/Camera';
import Screen2 from './Comp/Video';
import Screen3 from './Comp/Remender';
import Screen4 from './Comp/Sos';
import Screen5 from './Comp/Game';
import Screen6 from './Comp/Home';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: 'lightgreen'
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Image') {
              iconName = focused ? 'ios-camera' : 'ios-camera-outline';
            } else if (route.name === 'Video') {
              iconName = focused ? 'ios-videocam' : 'ios-videocam-outline';
            } else if (route.name === 'Reminder') {
              iconName = focused ? 'ios-alarm' : 'ios-alarm-outline';
            } else if (route.name === 'Sos') {
              iconName = focused ? 'ios-help-circle' : 'ios-help-circle-outline';
            } else if (route.name === 'Games') { // add icon for Games screen
              iconName = focused ? 'ios-game-controller' : 'ios-game-controller-outline';
            }else if (route.name === 'Home') { // add icon for Games screen
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#c2e8c2',
            borderTopWidth: 1,
            borderTopColor: '#ccc',
            paddingBottom: 5,
            paddingTop: 5,
          },
        })}
      >
           <Tab.Screen 
          name="Home" 
          component={Screen6} 
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen 
          name="Image" 
          component={Screen1} 
          options={{
            tabBarLabel: 'Camera',
          }}
        />
        <Tab.Screen 
          name="Video" 
          component={Screen2} 
          options={{
            tabBarLabel: 'Video',
          }}
        />
        
        <Tab.Screen 
          name="Reminder" 
          component={Screen3} 
          options={{
            tabBarLabel: 'Reminder',
          }}
        />
       
        <Tab.Screen 
          name="Sos" 
          component={Screen4} 
          options={{
            tabBarLabel: 'Sos',
          }}
        />
        <Tab.Screen 
          name="Games" 
          component={Screen5} 
          options={{
            tabBarLabel: 'Games',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
