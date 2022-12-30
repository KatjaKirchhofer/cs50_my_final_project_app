import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme, DarkTheme, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName,  TouchableOpacity} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';
import SuccessScreen from '../screens/SuccessScreen';
import GratitudeScreen from '../screens/GratitudeScreen';
import {RootStackParamList, RootTabParamList} from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import {AntDesign} from '@expo/vector-icons';
import {Octicons, Ionicons} from '@expo/vector-icons';
import GoalsScreen from "../screens/GoalsScreen";
import ResultScreen from "../screens/ResultScreen";
import store from "../store/store";
import {logout} from "../components/services/LogoutService";

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator/>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: true}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: true}}/>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const dictionary = store.getState().dictionary;
  const navigation = useNavigation()

  return (
    <BottomTab.Navigator
      initialRouteName="Success"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => logout(navigation, dictionary) }
            style={{paddingRight: 20}}
          >
            <AntDesign name="logout" size={24} color="black"/>
          </TouchableOpacity>
        )

      }}

    >
      <BottomTab.Screen
        name="Success"
        component={SuccessScreen}
        options={() => ({
          title: dictionary.success,
          tabBarIcon: ({color}) => <AntDesign name="Trophy" size={24} color={color}/>,
        })}
      />
      <BottomTab.Screen
        name="Gratitude"
        component={GratitudeScreen}
        options={{
          title: dictionary.gratitude,
          tabBarIcon: ({color}) => <Octicons name="heart" size={24} color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="Goals"
        component={GoalsScreen}
        options={{
          title: dictionary.goals,
          tabBarIcon: ({color}) => <AntDesign name="staro" size={24} color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="Results"
        component={ResultScreen}
        options={{
          title: dictionary.result,
          tabBarIcon: ({color}) => <Ionicons name="ios-book-outline" size={24} color={color}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

