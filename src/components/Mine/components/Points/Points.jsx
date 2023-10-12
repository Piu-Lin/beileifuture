import React, { Component } from 'react'
import backIcon from '../../icon/back.png'

import './index.less'
export default class Points  extends Component {
  BackTo0 = () => {
    this.props.MineState(0)
  }
  render() {
    return (
      <div className="index">
        <div className="TopNav">
          <div className="back" onClick={()=>{this.BackTo0()}} >
            <img src={ backIcon} alt="返回" />
          </div>
          <div className="title">
              <span>积分</span>
          </div>

        </div>
        <div className="points">
          <div className="score">
            <span>当前积分</span>
            <span>1000</span>
          </div>
        </div>
      </div>  
    )
  }
}
