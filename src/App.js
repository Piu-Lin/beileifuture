import Home from  "./components/Home/Home.jsx"
import BottomNav from "./components/BottomNav/BottomNav.jsx"
import Mine from "./components/Mine/Mine.jsx"

import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  state={
    BottomNavState:0,
  }
  BottomNavStateSwich=(tobe)=>{
    this.setState({BottomNavState:tobe})
  }
  render() {
    return (
      <>
      {/* <BottomNav BottomNavStateSwich={this.BottomNavStateSwich}/> */}
      {this.BottomNavState == 0 ? (<Home />):(<Mine/>)}
     </>
    )
  }
}
