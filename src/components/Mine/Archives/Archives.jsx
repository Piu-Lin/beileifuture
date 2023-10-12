import React, { Component } from 'react'
import backIcon from '../icon/back.png'
import './index.less'
import heath from '../icon/健康.png'
export default class Archives extends Component {
  BackTo0 = () => {
    this.props.MineState(0)
  }



  render() {
    return (
      <div className="index">
        <div className="TopNav">
          <div className="back" onClick={() => { this.BackTo0() }} >
            <img src={backIcon} alt="返回" />
          </div>
          <div className="title">
            <span>健康档案</span>
          </div>

        </div>
        <div className="Archives">
            <img src={heath} alt="" />
        </div>
      </div>
    )
  }
}
