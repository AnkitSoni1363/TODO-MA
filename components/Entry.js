import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Addtodo from './Addtodo';
import Listtodo from './Listtodo';
import Logout from './Logout';
import Search from './Search';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const Entry = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Addtodo"
        component={Addtodo}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="add-circle" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Listtodo"
        component={Listtodo}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="list" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={Logout}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="log-out" size={35} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
  },
});

export default Entry;
