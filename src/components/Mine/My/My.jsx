import React, { Component } from 'react'
import backIcon from '../icon/back.png'
import more from '../icon/more.png'

import './index.less'
export default class My  extends Component {
  BackTo0 = () => {
    this.props.MineState(0)
  }
  state = {
    
  }
  render() {
    return (
      <div className="index">
        <div className="TopNav">
          <div className="back" onClick={()=>{this.BackTo0()}} >
            <img src={ backIcon} alt="返回" />
          </div>
          <div className="title">
              <span>个人中心</span>
          </div>
        </div>
        <div className="concent">
          <li>
            <span>名字</span>
            <div>
              <span>李炜杰</span>
              <img src={more} alt="更多" />
              </div>
          </li>
          <li>
            <span>性别</span>
            <div>
              <span>男</span>
              <img src={more} alt="更多" />
              </div>
          </li>
          <li>
            <span>电话号码</span>
            <div>
              <span>191577777777</span>
              <img src={more} alt="更多" />
              </div>
          </li>
          <li>
            <span>账号</span>
            <div>
              <span>100011110</span>
              <img src={more} alt="更多" />
              </div>
          </li>
        </div>
      </div>  
    )
  }
}
