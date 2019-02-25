import AplloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import { createStore } from "redux";
import AppNavigator from "./navigator/AppNavigator";

const client = new AplloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/acv27ba74cbg",
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer 25738a0cfa8bb6f27e21fc42c17f05211e581c92135a40fac5df6d193e9182d9`
  }
});
const initialState = {
  action: "",
  name: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    case "UPDATE_NAME":
      return { name: action.name };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </ApolloProvider>
);

export default App;
