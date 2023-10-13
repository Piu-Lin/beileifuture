import React, { Component } from 'react'
import './index.less'
import BackIcon from "../../icon/Back.png"
export default class RedAndBlack extends Component {
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
                <span>红黑榜</span>
            </div>
                </div>
            </>
        )
    }
}
