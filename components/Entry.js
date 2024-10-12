import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Addtodo from './Addtodo';
import Listtodo from './Listtodo';
import Logout from './Logout';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Entry = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Addtodo"
        component={Addtodo}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="add-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Listtodo"
        component={Listtodo}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={Logout}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="log-out" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Entry;
