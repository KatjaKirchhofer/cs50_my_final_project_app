/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';
import SuccessScreen from '../screens/SuccessScreen';
import GratitudeScreen from '../screens/GratitudeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import {dictionary} from "../constants/Dictionary";
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import GoalsScreen from "../screens/GoalsScreen";
import ResultScreen from "../screens/ResultScreen";
import { Ionicons } from '@expo/vector-icons';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: true }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true }} />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
     </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Success"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Success"
        component={SuccessScreen}
        options={({ navigation }: RootTabScreenProps<'Success'>) => ({
          title: dictionary.success,
          tabBarIcon: ({ color }) =><AntDesign name="Trophy" size={24} color={color}/> ,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>

            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Gratitude"
        component={GratitudeScreen}
        options={{
          title: dictionary.gratitude,
          tabBarIcon: ({ color }) => <Octicons name="heart" size={24} color={color} /> ,
        }}
      />
      <BottomTab.Screen
        name="Goals"
        component={GoalsScreen}
        options={{
          title: dictionary.goals,
          tabBarIcon: ({ color }) => <AntDesign name="staro" size={24} color={color} /> ,
        }}
      />
      <BottomTab.Screen
        name="Results"
        component={ResultScreen}
        options={{
          title: dictionary.result,
          tabBarIcon: ({ color }) => <Ionicons name="ios-book-outline" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

