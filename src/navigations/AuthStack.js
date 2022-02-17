import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Signup } from "../screens";

const Stack = createStackNavigator();

const AuthStack = () => {
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: "center",
        cardStyle: { backgroundColor: theme.backgroundColor },
      }}
    >
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
