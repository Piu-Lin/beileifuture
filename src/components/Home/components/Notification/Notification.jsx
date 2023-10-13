import React, { Component } from 'react'
import './index.less'
import BackIcon from "../../icon/Back.png"
export default class Notification extends Component {
    BackToHomeNav=()=>{
        this.props.SetHomeState(0)
    }
    render() {
        return (
            <>
            <div className="TopNav">
             <div  className="back" onClick={() =>  this.BackToHomeNav()}  >
            <img src={BackIcon} alt="返回" />
            </div>
          <div className="title">
            <span>通知公告</span>
          </div>
        </div>
            </>
        )
    }
}
