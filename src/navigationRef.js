import { NavigationActions } from "react-navigation";
let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName: routeName,
      params: params,
    })
  );
};

// Function to be able to access the ({navigation}) from outside react component. (For example, AuthContext)
