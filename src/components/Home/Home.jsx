/*
 * @Author: bigliweijie 1771662778@qq.com
 * @Date: 2023-10-09 09:11:15
 * @LastEditors: bigliweijie 1771662778@qq.com
 * @LastEditTime: 2023-10-12 17:41:22
 * @FilePath: \beileifuture\src\components\Home\Home.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from "react";


import "./Home.less";
import Hero from "./Hero.jpeg";
import InformationBulletins from "./icon/InformationBulletins.png";
import DeliberativeManagement from "./icon/DeliberativeManagement.png";
import Questionnaires from "./icon/Questionnaires.png";
import RABList from "./icon/RABList.png";
import emergencyIcon from "./icon/emergencyIcon.png";
import OnlineVote from "./icon/OnlineVote.png";
import ConflictMediationimg from "./icon/ConflictMediation.png";
import CorruptionConvention from "./icon/CorruptionConvention.png";
import CleanAndOpen from "./icon/CleanAndOpen.png";

import dongtai from "./icon/dongtai.png";
import huodong from "./icon/huodong.png";
import jiyi from "./icon/jiyi.png";
import yinling from "./icon/yinling.png";
import zixun  from './icon/zixun.png'

import Survey from "../Mine/components/Survey/Survey"
import Notification from "./components/Notification/Notification";
import ThreeAffairsOpen from "./components/ThreeAffairsOpen/ThreeAffairsOpen";
import Deliberative from "./components/Deliberative/Deliberative";
import RedAndBlack from "./components/RedAndBlack/RedAndBlack";
import ConflictMediation from "./components/ConflictMediation/ConflictMediation";
import QLConvention from "./components/QLConvention/QLConvention";
import QLOpen from "./components/QLOpen/QLOpen";
import Vote from "../Mine/components/Vote/Vote";

import Dongtai from "./components/Dongtai/Dongtai";
import Huodong from "./components/Huodong/Huodong";
import Jiyi from "./components/Jiyi/Jiyi";
import Yinling from "./components/Yinling/Yinling";

// import wx from "weixin-js-sdk";

export default class Home extends Component {


  state = {
    //首页资讯
    emergency: {
      pushTime: "2024年10月18日",
      content: "吴佳明检查发现严重隐患,请及时关注!",
    },
    //页面导航编号
    HomeState: 0,
  };
  SetHomeState = (tobe) => {
    this.setState({ HomeState: tobe });
  };
  //初始化请求
  init = () => {
    fetch(
      "http://218.0.59.244:10009/prod-api/governance/information_bulletin/openList"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ emergency: {
        content:data.rows[0].content
      }}))
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    this.init();
  }
  renderContent() {
    switch (this.state.HomeState) {
      case 0: //首页导航
        return (
          <div className="HomeNavBox">
            <img id="hero" src={Hero} alt="hero" />
            <div style={{ top: "-5vh" }} className="HomeNavCard">
              <div
                id="emergencyMessage"
                onClick={() => {
                  this.SetHomeState(1);
                }}
              >
                <img
                  id="emergencyIcon"
                  src={emergencyIcon}
                  alt="emergencyIcon"
                />
                <div id="emergencyContent">{this.state.emergency.content}</div>
              </div>
              <div className="homeSubCardLine">
                <div
                  onClick={() => {
                    this.SetHomeState(2);
                  }}
                  className="homeSubCardItem"
                >
                  <img
                    className="homeSubCardBg"
                    src={InformationBulletins}
                    alt="InformationBulletins"
                  />
                  <div className="homeSubCardTitle">三务公开</div>
                  <div className="homeSubCardContent">村务信息公开</div>
                </div>
                <div
                  onClick={() => {
                    this.SetHomeState(3);
                  }}
                  className="homeSubCardItem"
                >
                  <img
                    className="homeSubCardBg"
                    src={DeliberativeManagement}
                    alt="DeliberativeManagement"
                  />
                  <div className="homeSubCardTitle">议事管理</div>
                  <div className="homeSubCardContent">村务事程决策</div>
                </div>
              </div>
              <div className="homeSubCardLine">
                <div
                  onClick={() => {
                    // const user = JSON.parse(localStorage.getItem("user"));
                    // wx.miniProgram.navigateTo({
                    //   url: "/pages/scan/scan?userID=" + user.id,
                    // });
                    this.setState({ HomeState: 0 })
                    this.SetHomeState(4);
                  }}
                  className="homeSubCardItem"
                >
                  <img
                    className="homeSubCardBg"
                    src={Questionnaires}
                    alt="Questionnaires"
                  />
                  <div className="homeSubCardTitle">问卷调查</div>
                  <div className="homeSubCardContent">村务事项调研</div>
                </div>
                <div
                  onClick={() => {
                    this.SetHomeState(5);
                  }}
                  className="homeSubCardItem"
                >
                  <img className="homeSubCardBg" src={RABList} alt="RABList" />
                  <div className="homeSubCardTitle">红黑榜</div>
                  <div className="homeSubCardContent">村民行为奖惩</div>
                </div>
              </div>
            </div>
            <div className="HomeNavCard">
            {/* <div
                id="emergencyMessage"
                onClick={() => {
                  this.SetHomeState(1);
                }}
              >
                <img
                  // id="emergencyIcon"
                  style={{width:"60px"}}
                  src={zixun}
                  alt="emergencyIcon"
                />
                <div id="emergencyContent">{this.state.emergency.content}</div>
              </div> */}
              <div className="homeSubCardLine">
                <div
                  onClick={() => {
                    this.SetHomeState(6);
                  }}
                  style={{ backgroundColor: "#fff6f6" }}
                  className="homeSubCardItem homeSubCardItemReplenish"
                >
                  <img
                    className="homeSubCardBgI"
                    src={OnlineVote}
                    alt="OnlineVote"
                  />
                  <div>
                    <div className="homeSubCardCaption">线上投票</div>
                    <div className="homeSubCardPart">民主决策</div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    this.SetHomeState(7);
                  }}
                  style={{ backgroundColor: "#f1f8ff" }}
                  className="homeSubCardItem homeSubCardItemReplenish"
                >
                  <img
                    className="homeSubCardBgI"
                    src={ConflictMediationimg}
                    alt="ConflictMediationimg"
                  />
                  <div>
                    <div className="homeSubCardCaption">矛盾调解</div>
                    <div className="homeSubCardPart">安居乐业</div>
                  </div>
                </div>
              </div>
              <div className="homeSubCardLine">
                <div
                  onClick={() => {
                    this.SetHomeState(8);
                  }}
                  style={{ backgroundColor: "#f1fdff" }}
                  className="homeSubCardItem homeSubCardItemReplenish"
                >
                  <img
                    className="homeSubCardBgI"
                    src={CorruptionConvention}
                    alt="CorruptionConvention"
                  />
                  <div>
                    <div className="homeSubCardCaption">清廉公约</div>
                    <div className="homeSubCardPart">民众约定</div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    this.SetHomeState(9);
                  }}
                  style={{ backgroundColor: "#fff9f2" }}
                  className="homeSubCardItem homeSubCardItemReplenish"
                >
                  <img
                    className="homeSubCardBgI"
                    src={CleanAndOpen}
                    alt="CleanAndOpen"
                  />
                  <div>
                    <div className="homeSubCardCaption">清廉公开</div>
                    <div className="homeSubCardPart">人民监督</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ top: "-5vh" }} className="HomeNavCard">
              <div className="homeSubCardLine">
                <div
                  onClick={() => {
                    this.SetHomeState(11);
                  }}
                  className="homeSubCardItem"
                >
                  <img
                    className="homeSubCardBg"
                    src={huodong}
                    alt="InformationBulletins"
                  />
                  <div className="homeSubCardLTitle">党群活动</div>
                </div>
                <div
                  onClick={() => {
                    this.SetHomeState(13);
                  }}
                  className="homeSubCardItem"
                >
                  <img
                    className="homeSubCardBg"
                    src={jiyi}
                    alt="DeliberativeManagement"
                  />
                  <div className="homeSubCardLTitle">党建记忆</div>
                </div>
              </div>
              <div className="homeSubCardLine">
                <div
                   onClick={() => {
                    this.SetHomeState(10);
                  }}
                  className="homeSubCardItem"
                >
                  <img
                    className="homeSubCardBg"
                    src={dongtai}
                    alt="Questionnaires"
                  />
                  <div className="homeSubCardLTitle">党建动态</div>
                </div>
                <div
                  onClick={() => {
                    this.SetHomeState(12);
                  }}
                  className="homeSubCardItem"
                >
                  <img className="homeSubCardBg" src={yinling} alt="RABList" />
                  <div className="homeSubCardLTitle">党建引领</div>
                </div>
                
              </div>
              <div className="homeSubCardLine">
              <div onClick={()=>{
                window.location.href="https://scenics.hua-jie.top/H5/index.html"
              }}>
                  <div className="homelvBox">旅游导览</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 1: // 通知公告
        return <Notification SetHomeState={this.SetHomeState} />;
      case 2: // 三务公开
        return <ThreeAffairsOpen SetHomeState={this.SetHomeState} />;
      case 3: // 议事管理
        return <Deliberative SetHomeState={this.SetHomeState} />;
      case 4: // 问卷调查
        return (<Survey comefrom="1" MineState={()=>{}} SetHomeState={this.SetHomeState} />)

        break;
      case 5: // 红黑榜
        return <RedAndBlack SetHomeState={this.SetHomeState} />;
      case 6: // 线上投票
        return (
          <Vote
            comefrom="1"
            MineState={() => {}}
            SetHomeState={this.SetHomeState}
          />
        );

      case 7: // 矛盾调解
        return <ConflictMediation SetHomeState={this.SetHomeState} />;
      case 8: // 清廉公约
        return <QLConvention SetHomeState={this.SetHomeState} />;
      case 9: // 清廉公开
        return <QLOpen SetHomeState={this.SetHomeState} />;
      case 10: // 动态
        return <Dongtai SetHomeState={this.SetHomeState} />;
      case 11: // 活动
        return <Huodong SetHomeState={this.SetHomeState} />;
      case 12: // 引领
        return <Yinling SetHomeState={this.SetHomeState} />;
      case 13: // 记忆
        return <Jiyi SetHomeState={this.SetHomeState} />;
      default:
        return <></>;
    }
  }
  render() {
    return <>{this.renderContent()}</>;
  }
}
