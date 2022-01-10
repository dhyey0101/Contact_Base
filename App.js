import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";

const Stack = createNativeStackNavigator();


class MyStack extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen
            name="Signup"
            component={Signup}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

// const myStack = createStackNavigator({
//     'Login' : Login,
//     // 'About' : About,
//     // 'Contact' : Contact

// }, {
//     initialRouteName: 'Home'
// });

// const AppContainer = createAppContainer(myStack)

export default MyStack;