import React, { Component } from 'react'
import homeBottomNav from './icon/homeBottomNav.png'
import mineBottomNav from './icon/mineBottomNav.png'

export default class BottomNav extends Component {
  BottomNavStateSwichTo1 = () => {
    this.props.BottomNavStateSwich(1)
  }
  BottomNavStateSwichTo0 = () => {
    this.props.BottomNavStateSwich(0)
  }
  render() {
    const ssBottomNavBox = {
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: '#FFF',
      position: "absolute",
      bottom: "0px",
      height: '8vh',
      width: '100%',
    }
    const ssBottomNavitem = {
      display: 'flex',
      position: "relative",
      height: '8vh',
      width: '20%',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    }
    return (
      <div style={ssBottomNavBox}>
        <div onClick={() => { this.BottomNavStateSwichTo0() }} style={ssBottomNavitem}>
          <img src={homeBottomNav} alt='主页' />
          <div>主页</div>
        </div>
        <div onClick={() => { this.BottomNavStateSwichTo1() }} style={ssBottomNavitem}>
          <img src={mineBottomNav} alt='我的' />
          <div>我的</div>
        </div>
      </div>
    )
  }
}
