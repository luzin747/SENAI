import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home/HomePage'
import Topics from './pages/Topics/TopicsPage'
import ButtonNew from './components/ButtonNew'
import Logout from './pages/Logout/LogoutPage'
import User from './pages/User/UserPage'

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                tabBarStyle: ({focused, color, size}) => {
                    style: {
                        background: 'black'
                    }  
                },

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                    }
                    if (route.name === 'Topics') {
                        iconName = focused 
                        ? 'ios-list' 
                        : 'ios-list-outline';
                        
                    }
                    if (route.name === 'Logout') {
                        iconName = focused 
                        ? 'ios-log-out' 
                        : 'ios-log-out-outline';
                    }
                    if (route.name === 'Users') {
                        iconName = focused 
                        ? 'ios-person' 
                        : 'ios-person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#212124',
                tabBarInactiveTintColor: 'grey',
            })}>



            <Tab.Screen name="Home" 
            component={Home}
            />
            

            <Tab.Screen name="Topics" 
            component={Topics} 
            />

            <Tab.Screen 
            name="New" 
            component={ButtonNew}
            options={{
                tabBarLabel: '',
                tabBarIcon: ({ focused, size, color}) => (
                    size = "25pt",
                    <ButtonNew size={size} color={color} focused={focused} />
                )
            }} 
            />

            <Tab.Screen 
                name="Users" 
                component={User} 
            />

            <Tab.Screen 
                name="Logout" 
                component={Logout} 
            />  
        </Tab.Navigator>
    )
}
