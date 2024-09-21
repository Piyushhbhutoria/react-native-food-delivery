import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootStack from "./src/router";

class App extends React.Component {
  render() {
    return (<GestureHandlerRootView>
      <RootStack />
    </GestureHandlerRootView>);
  }
}

export default App;
