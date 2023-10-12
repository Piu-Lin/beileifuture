import React, { Component } from 'react'
import backIcon from '../icon/back.png'
import './index.less'
export default class Survey extends Component {
  state = {
    isSelect:false
  }
  BackTo0 = () => {
    this.props.MineState(0)
  }
  selected = () => {
    console.log(this.isSelect)
  }
  render() {
    return (
      <div className="index">
        <div className="TopNav">
          <div className="back" onClick={()=>{this.BackTo0()}} >
            <img src={ backIcon} alt="返回" />
          </div>
          <div className="title">
              <span>问卷</span>
          </div>
        </div>
        <div className="switchTag">
          <div><span onClick={()=>this.selected()} className={this.isSelect? 'tagSelected': ''}>未填问卷</span></div>
          <div><span  onClick={()=>this.selected()} className={this.isSelect? '': 'tagSelected'}>历史问卷</span></div>
        </div>
      </div>  
    )
  }
}
