import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Homepage from "../screens/homepage/Homepage";
import Contacts from "../screens/contacts/Contact";
import Register from "../screens/register/Register";
import Login from "../screens/login/Login";
import { RootStore, useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";
import { currentUserThunk } from "../store/authorization/thunkAuth";
import Loader from "./Loader/Loader";


const Stack = createNativeStackNavigator();

function MyApp() {
  const { isLoggedIn, isRefreshing } = useAppSelector(
    (state: RootStore) =>
      state.auth as { isLoggedIn: boolean; isRefreshing: boolean }
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  return isRefreshing ? (<Loader/>) : (
      <NavigationContainer>
        {isLoggedIn && (
          <Stack.Navigator>
            <Stack.Screen
              name="contacts"
              component={Contacts}
              options={{ headerShown: false }}
              />
          </Stack.Navigator>
        )}
        {!isLoggedIn && (
          <Stack.Navigator>
            <Stack.Screen
              name="homepage"
              component={Homepage}
              options={{ headerShown: false }}
              />
            <Stack.Screen name="registered" component={Register} />
            <Stack.Screen name="login" component={Login} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
  );
}

export default MyApp;
