import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import images from "./images.json";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {images: images}
  }


 render() {
  return (
    <div>Hello World</div>
  )
 }

}


export default App;
