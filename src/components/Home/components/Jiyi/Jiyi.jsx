import React, { Component } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
import i1 from './img/1.png'
import i2 from './img/2.png'
import i3 from './img/3.png'
import i4 from './img/4.png'
import i5 from './img/5.png'
import i6 from './img/6.jpg'




export default class Jiyi extends Component {
  state = {
    fileList: [],
  };

  fileList = (newFileList) => {
    this.setState({ fileList: newFileList });
  };

  // 返回
  BackToHomeNav = () => {
    this.props.SetHomeState(0);
  };

  render() {
    return (
      <>
        <div className="index">
          <div className="TopNav">
            <div className="back" onClick={() => this.BackToHomeNav()}>
              <img src={BackIcon} alt="返回" />
            </div>
            <div className="title">
              <span>党建记忆</span>
            </div>
          </div>

          <div className="Archives">
            <img className="img" src={i1} alt="" />
            <img className="img" src={i2} alt="" />
            <img className="img" src={i3} alt="" />
            <img className="img" src={i4} alt="" />
            <img className="img" src={i5} alt="" />
            <img className="img" src={i6} alt="" />

          </div>
        </div>
      </>
    );
  }
}
