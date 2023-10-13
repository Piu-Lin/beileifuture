import React, { Component } from 'react'
import './index.less'
import BackIcon from "../../icon/Back.png"
export default class ThreeAffairsOpen extends Component {
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
                <span>三务公开</span>
            </div>
                </div>
            </>
        )
    }
}
