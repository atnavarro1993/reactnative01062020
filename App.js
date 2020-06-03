import React from "react";
import ReactDOM from "react-dom";
import { NativeRouter, Route, Switch } from "react-router-native";
import AnimatedStack from 'react-router-native-animate-stack'
import { Home } from "./components/Home";
import { About } from "./components/About";
import { SafeAreaView } from "react-native";

const App = () => {
  return (
    
    <NativeRouter>
      <Switch>
      <AnimatedStack>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        </AnimatedStack>
      </Switch>
    </NativeRouter>
    
  );
};

export default App;
