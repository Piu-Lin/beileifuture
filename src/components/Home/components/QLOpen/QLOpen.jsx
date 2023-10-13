import React, { Component } from 'react'
import './index.less'
import BackIcon from "../../icon/Back.png"
export default class QLOpen extends Component {
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
                <span>清廉公开</span>
            </div>
                </div>
            </>
        )
    }
}
