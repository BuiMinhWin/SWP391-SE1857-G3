import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Component/greet"; //Named export
import Welcome from "./Component/welcome";
import Hello from "./Component/Hello";
import Message from "./Component/Message";
import Count from "./Component/Counter";
import FunctionClick from "./Component/FunctionClick";
import ClassClick from "./Component/ClassClick";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassClick />
        <FunctionClick />

        {/* <Count /> */}
        {/* <Message /> */}

        {/* <Greet name="Quan" classRoom="SE1857">
          <p>This is children prop</p>
        </Greet>
        <Greet name="Thang" classRoom="SE1858"> 
          <button>COCC</button>
        </Greet>
        <Greet name="Phong" classRoom="SE1859"/> */}

        {/* <Welcome name="Quan" classRoom="SE1857" />
        <Welcome name="Thang" classRoom="SE1858"/>
        <Welcome name="Phong" classRoom="SE1859"/> */}
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
