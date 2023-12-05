/*
 * @Author: bigliweijie 1771662778@qq.com
 * @Date: 2023-10-08 16:50:11
 * @LastEditors: bigliweijie 1771662778@qq.com
 * @LastEditTime: 2023-10-09 09:19:02
 * @FilePath: \beileifuture\src\App.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import Home from "./components/Home/Home.jsx"
import BottomNav from "./components/BottomNav/BottomNav.jsx"
import Mine from "./components/Mine/Mine.jsx"
import Neighbourhood from "./components/Neighbourhood/Neighbourhood.jsx"
import Login from './components/Login/index.jsx'

import './App.less';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    BottomNavState: 3,
    isLogin: false
  }
  BottomNavStateSwich = (tobe) => {
    this.setState({ BottomNavState: tobe })
  }

  login = () => {
    this.setState({ isLogin: true,BottomNavState: 0 })
  }

  renderContent = () => {
    switch (this.state.BottomNavState) {
      case 0:
        return (<Home />)
      case 1:
        return (<Mine />)
      case 2:
        return (<Neighbourhood />)

      default:
        return (<Login login={this.login} />)
    }
  }
  render() {
    const { isLogin } = this.state
    return (
      <>
        {
          isLogin ?
            <BottomNav BottomNavStateSwich={this.BottomNavStateSwich} /> : <></>
        }
        {this.renderContent()}
      </>
    )
  }
}
