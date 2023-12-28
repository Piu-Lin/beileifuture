import React, { Component } from "react";
import "./index.less";
import BackIcon from "../../icon/Back.png";
import people from '../../icon/people.png'

export default class Yinling extends Component {
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
  //上传图片

  //上传数据

  render() {
    return (
      <>
        <div className="index">
          <div className="TopNav">
            <div className="back" onClick={() => this.BackToHomeNav()}>
              <img src={BackIcon} alt="返回" />
            </div>
            <div className="title">
              <span>党建引领</span>
            </div>
          </div>

          <div className="Archives">
              <img  className='people' src={people} alt="" />
          </div>
        </div>
      </>
    );
  }
}
